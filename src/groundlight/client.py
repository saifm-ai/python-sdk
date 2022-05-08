import os

from openapi_client import ApiClient, Configuration
from openapi_client.api.detectors_api import DetectorsApi
from openapi_client.api.image_queries_api import ImageQueriesApi

API_TOKEN_WEB_URL = "https://app.positronix.ai/reef/my-account/api-tokens"
API_TOKEN_VARIABLE_NAME = "GROUNDLIGHT_API_TOKEN"


class ApiTokenError(Exception):
    pass


class Groundlight(DetectorsApi, ImageQueriesApi):
    """
    A convenience wrapper around the generated API classes.
    The API token (auth) is specified through the GROUNDLIGHT_API_TOKEN environment variable by default.

    Example usage:
    ```
    gl = Groundlight()
    detectors = gl.list_detectors().body
    ```
    """

    def __init__(self, endpoint: str = "https://device.positronix.ai/device-api", api_token: str = None):
        """
        :param endpoint: optionally specify a different endpoint. E.g.
            - Prod (default): https://device.positronix.ai/device-api
            - Integ: https://device.integ.positronix.ai/device-api
            - Localhost tunnel to a GPU instance: http://localhost:8000/device-api
        :param api_token: use this API token for your API calls. If unset, fallback to the
            environment variable "GROUNDLIGHT_API_TOKEN".
        """
        # Specify the endpoint
        configuration = Configuration(host=endpoint)

        if api_token is None:
            try:
                # Retrieve the API token from environment variable
                api_token = os.environ[API_TOKEN_VARIABLE_NAME]
            except KeyError as e:
                raise ApiTokenError(
                    "No API token found. Please put your token in an environment variable "
                    f'named "{API_TOKEN_VARIABLE_NAME}". If you don\'t have a token, you can '
                    f"create one at {API_TOKEN_WEB_URL}"
                ) from e

        configuration.api_key["ApiToken"] = api_token
        super().__init__(ApiClient(configuration))
