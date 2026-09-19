# Image assets

This folder is intentionally almost empty.

Run `npm run fetch:assets` from the project root to download the 65
photographs from the existing bbsrstone.com site into the structure below:

```
images/
├── logos/logo1.png
├── about-img.jpg
├── about1.jpg
├── profile-1.jpg, profile-3.jpg, profile-7.jpg
├── slides/slider-01.jpg … slider-05.jpg
├── chips/chips1.jpg … chips9.jpg
├── stone/stone1.jpg … stone7.jpg
├── metal/metal1.jpg … metal12.jpg
├── excavator/excav1-3.jpg, jcb1-3.jpg
└── office/gallery1.jpg … gallery20.jpg
```

Any file that is missing renders as a neutral "photo pending" tile rather
than a broken image, so you can replace them one at a time as the client
supplies final photography.
