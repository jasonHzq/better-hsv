###better HSV

HSV is an abbreviation to hue, saturation and value.

HSV calculate value which means the lightness of color  by get the max value of r, g, b of the color.

It's a HSV color bar where each color has the equality saturation and value in HSV. But it's obviously to find that the lightness is not always equality.

![hsv](http://cbu01.alicdn.com/cms/upload/detail/hsv/hsv.png)

For example, here are two colors with a HEX format: '#AACC99' and '#88CC00', the HSV values of both colors are 0xCC. It's the reason for the color bar above.

And this is a color bar by my better hsv.

![better hsv](http://cbu01.alicdn.com/cms/upload/detail/hsv/better_hsv.png)

###API

```
/*
 * transform the origin hsv
 * @param r g b, integer, 0~255
 * @return for instarnce: 'FFBB90', string
*/
_hsv2rgb

/*
 * transform by better hsv
 * @param r g b, integer, 0~255
 * @return for instarnce: 'FFBB90', string
*/
hsv2rgb

rgb2str
//rgb2str(0xcc, 0xab, 0x80)
//return '#CCAB80'
```
