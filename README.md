### Workflow
1. Create new branch from main and name it after Jira ticket. For example MS-123-new-feature
2. Implement on your branch what needs to be done in the Jira story
3. Create PR (pull request) from your branch to *main*
4. Ask someone to review your PR. 
5. Once PR is approved by reviewer merge it to main branch
6. Deploy your changes to the website. For that run:
   * yarn deploy

---
## Images WebP

We use **webp** format for non SVG images on the site. When we get new image from designer do this:
1. Copy PNG image to */src/img/org* folder
2. Run script */src/img/img.sh*

This will create .webp images in /src/img folder whose max size would be 512px. In order to run scrip you need to install the following aps:
- cwebp
- pngcrush
- sips

### Image Sizes
* p_XXX_screens.png == 730x280
* p_XXX_screens_sm.png == 125x48
* p_XXX.png == 980x980 inside icon == 650x650
* p_XXX_sm.png == 55x55
