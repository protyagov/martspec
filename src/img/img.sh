#!/bin/bash

FILES=*.png
for f in org/$FILES
do
	sips -Z 64  $f --out $f.size64
	pngcrush -brute $f.size64 $f.size64.new		
   	cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f.size64.new -o "${f:4:${#f}-8}".64.webp 	
  	

	sips -Z 512  $f --out $f.size512
	pngcrush -brute $f.size512 $f.size512.new		
  	cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f.size512.new -o "${f:4:${#f}-8}".512.webp 	
done

rm org/*size64
rm org/*size512
rm org/*.new


