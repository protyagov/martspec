#!/bin/bash

FILES=*.png
for f in $FILES
do
  cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f -o $f.webp
done

ls *webp | sed 's/^\(.*\)\.png.webp$/mv "\1.png.webp" "\1.webp"/' | sh
