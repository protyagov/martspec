#!/bin/bash

FILES=*.png
for f in $FILES
do
  # take action on each file. $f store current file name
#   echo $f
  cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f -o $f.webp
done

ls *webp | sed 's/^\(.*\)\.png.webp$/mv "\1.png.webp" "\1.webp"/' | sh

# Complication Regular
#sips -Z 32  comp.png --out c_circular38mm.png;pngcrush -brute c_circular38mm.png c_circular38mm.png.new; mv c_circular38mm.png.new c_circular38mm.png
#sips -Z 36  comp.png --out c_circular40mm.png;pngcrush -brute c_circular40mm.png c_circular40mm.png.new; mv c_circular40mm.png.new c_circular40mm.png
#sips -Z 40  comp.png --out c_circular44mm.png;pngcrush -brute c_circular44mm.png c_circular44mm.png.new; mv c_circular44mm.png.new c_circular44mm.png; cp c_circular44mm.png c_utilitar38mm.png

