# Generates social/profile images from the source brand-mark SVGs in this
# directory.
#
# `make linkedin` (default) produces 300x300 PNGs of the graphic mark only
# (no wordmark), centered with 20px of transparent padding on every edge
# (260x260 inner content):
#   light-logo-linkedin.png   for use on light backgrounds
#   dark-logo-linkedin.png    for use on dark backgrounds
#
# Requires `xmlstarlet`, `rsvg-convert` (librsvg), and `magick` (ImageMagick)
# on PATH:
#   brew install xmlstarlet librsvg imagemagick
#
# Generated PNGs are gitignored — edit the source SVGs and re-run `make`.

SHELL := /bin/bash

SOURCES  := light-logo.svg dark-logo.svg
LINKEDIN := $(SOURCES:.svg=-linkedin.png)

# The source SVGs organize their child elements into two named groups:
#   <g id="graphic">   - the brand-mark glyph (kept for the LinkedIn image)
#   <g id="wordmark">  - the "BSF5Y" text (stripped for the LinkedIn image)
WORDMARK_GROUP := wordmark

# 300x300 canvas with 20px transparent padding on all edges -> 260x260 inner.
CANVAS := 300
INNER  := 260

# High-resolution intermediate render — oversample, then let `magick -trim`
# detect the graphic mark's bounding box from rendered pixels (more robust
# than hand-measuring the SVG coordinate space).
RENDER_W := 2000

.PHONY: all linkedin clean check-tools

all: linkedin

linkedin: $(LINKEDIN)

check-tools:
	@for tool in xmlstarlet rsvg-convert magick; do \
	  command -v $$tool >/dev/null || { \
	    echo "error: missing '$$tool' (try: brew install xmlstarlet librsvg imagemagick)"; \
	    exit 1; \
	  }; \
	done

%-logo-linkedin.png: %-logo.svg Makefile | check-tools
	@xmlstarlet ed -N s=http://www.w3.org/2000/svg \
	    -d "//s:g[@id='$(WORDMARK_GROUP)']" $< \
	  | rsvg-convert -w $(RENDER_W) \
	  | magick - -trim +repage \
	      -resize $(INNER)x$(INNER) \
	      -background none -gravity center -extent $(CANVAS)x$(CANVAS) \
	      $@
	@echo "  ✓ $@"

clean:
	rm -f $(LINKEDIN)
