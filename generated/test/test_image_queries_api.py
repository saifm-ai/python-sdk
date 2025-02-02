"""
    Groundlight API

    Ask visual queries.  # noqa: E501

    The version of the OpenAPI document: 0.1.0
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.image_queries_api import ImageQueriesApi  # noqa: E501


class TestImageQueriesApi(unittest.TestCase):
    """ImageQueriesApi unit test stubs"""

    def setUp(self):
        self.api = ImageQueriesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_image_query(self):
        """Test case for get_image_query"""
        pass

    def test_list_image_queries(self):
        """Test case for list_image_queries"""
        pass

    def test_submit_image_query(self):
        """Test case for submit_image_query"""
        pass


if __name__ == "__main__":
    unittest.main()
