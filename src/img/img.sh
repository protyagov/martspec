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

cp vitamin.en.64.webp vitamin.ar.64.webp
cp vitamin.en.64.webp vitamin.de.64.webp
cp vitamin.en.64.webp vitamin.es.64.webp
cp vitamin.en.64.webp vitamin.fr.64.webp
cp vitamin.en.64.webp vitamin.hi.64.webp
cp vitamin.en.64.webp vitamin.ja.64.webp
cp vitamin.en.64.webp vitamin.pt.64.webp
cp vitamin.en.512.webp vitamin.ar.512.webp
cp vitamin.en.512.webp vitamin.de.512.webp
cp vitamin.en.512.webp vitamin.es.512.webp
cp vitamin.en.512.webp vitamin.fr.512.webp
cp vitamin.en.512.webp vitamin.hi.512.webp
cp vitamin.en.512.webp vitamin.ja.512.webp
cp vitamin.en.512.webp vitamin.pt.512.webp

cp bodysize.en.64.webp bodysize.ar.64.webp
cp bodysize.en.64.webp bodysize.de.64.webp
cp bodysize.en.64.webp bodysize.es.64.webp
cp bodysize.en.64.webp bodysize.fr.64.webp
cp bodysize.en.64.webp bodysize.hi.64.webp
cp bodysize.en.64.webp bodysize.ja.64.webp
cp bodysize.en.64.webp bodysize.pt.64.webp
cp bodysize.en.512.webp bodysize.ar.512.webp
cp bodysize.en.512.webp bodysize.de.512.webp
cp bodysize.en.512.webp bodysize.es.512.webp
cp bodysize.en.512.webp bodysize.fr.512.webp
cp bodysize.en.512.webp bodysize.hi.512.webp
cp bodysize.en.512.webp bodysize.ja.512.webp
cp bodysize.en.512.webp bodysize.pt.512.webp