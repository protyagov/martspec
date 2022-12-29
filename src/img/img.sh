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

cp org/header_watches.webp .

cp vitamin.en.512.webp vitamin.ar.512.webp
cp vitamin.en.512.webp vitamin.de.512.webp
cp vitamin.en.512.webp vitamin.es.512.webp
cp vitamin.en.512.webp vitamin.fr.512.webp
cp vitamin.en.512.webp vitamin.hi.512.webp
cp vitamin.en.512.webp vitamin.ja.512.webp
cp vitamin.en.512.webp vitamin.pt.512.webp

cp size.en.512.webp size.ar.512.webp
cp size.en.512.webp size.de.512.webp
cp size.en.512.webp size.es.512.webp
cp size.en.512.webp size.fr.512.webp
cp size.en.512.webp size.hi.512.webp
cp size.en.512.webp size.ja.512.webp
cp size.en.512.webp size.pt.512.webp

cp header_screens.en.512.webp header_screens.ar.512.webp
cp header_screens.en.512.webp header_screens.de.512.webp
cp header_screens.en.512.webp header_screens.es.512.webp
cp header_screens.en.512.webp header_screens.fr.512.webp
cp header_screens.en.512.webp header_screens.hi.512.webp
cp header_screens.en.512.webp header_screens.ja.512.webp
cp header_screens.en.512.webp header_screens.pt.512.webp

cp mass.en.512.webp mass.ar.512.webp
cp mass.en.512.webp mass.de.512.webp
cp mass.en.512.webp mass.es.512.webp
cp mass.en.512.webp mass.fr.512.webp
cp mass.en.512.webp mass.hi.512.webp
cp mass.en.512.webp mass.ja.512.webp
cp mass.en.512.webp mass.pt.512.webp