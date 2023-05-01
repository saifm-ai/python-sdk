# Numpy, PIL, OpenCV - using common libraries

## Smaller is better!

Groundlight is optimized to run on small edge devices. As such, you can use the Groundlight SDK without
installing large libraries like `numpy` or `OpenCV`.

But if you're already installing them, we'll use them. Our SDK detects if these libraries are installed
and will make use of them if they're present. If not, we'll gracefully degrade, and tell you what's
wrong if you try to use these features.

## Numpy

The Groundlight SDK can accept images as `numpy` arrays. They should be in the standard HWN format in RGB color order.
Pixel values should be from 0-255 (not 0.0-1.0 as floats). SO `uint8` data type is preferable since it saves memory.

Here's sample code to create an 800x600 random image in numpy:

```python notest
import numpy as np

img = np_img = np.random.uniform(0, 255, (600, 800, 3))
```

## PIL

The Groundlight SDK can accept PIL images directly in `submit_image_query`.

## OpenCV

OpenCV creates images that are stored as numpy arrays. So can send them to `submit_image_query` directly.
<b>BUT!</b> OpenCV uses BGR color order, not RGB. You can reverse them as follows:

```python notest
rgb_img = bgr_img[:, :, ::-1]
```

See [Issue #34](https://github.com/groundlight/python-sdk/issues/34) for a discussion about OpenCV support.