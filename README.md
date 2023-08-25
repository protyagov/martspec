## About
[Martspec](martspec.com) is focused on promoting a healthy lifestyle. Our objective is to assist users in leading a healthier lifestyle by considering their vitamin and mineral intake, psychological well-being, and body characteristics.

![](https://img.shields.io/website?url=https%3A%2F%2Fmartspec.com)
![](https://visitor-badge.laobi.icu/badge?page_id=protyagov.martspec)

## Install
```
nvm current                         # Check current *node* version
nvm use 16.16.0                     # Use *node* version 16

git clone <repo link>               # Clone repo to your local computer
yarn install                        # Install all dependencies
yarn svr                            # Run website locally

yarn outdated                       # See what packages can be updated
yarn upgrade-interactive --latest   # Interactively update to the latest versions
```

## Workflow
```mermaid
stateDiagram-v2
   classDef redEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow
   classDef greenEvent fill:#00A36C,color:white,font-weight:bold,stroke-width:2px,stroke:orange

      
    [*] --> Main: clone repo
    Main --> MS_123: Create your branch
    MS_123 --> PullRequest: Create PR to main
    note left of MS_123
      Name it with Jira ticket.
      Example MS-123
    end note
    PullRequest --> Approved:::greenEvent
    PullRequest --> Rejected:::redEvent
    Rejected --> MS_123: fix issues
    Approved --> Main: merge
    Main --> martspec.com: deploy to website
    martspec.com --> [*]
    note left of martspec.com
      git checkout main
      yarn deploy
    end note


```




## Images WebP

We use **webp** format for non SVG images on the site. When we get new image from designer do this:
1. Copy PNG image to */src/img/org* folder
2. Run script */src/img/img.sh*

This will create .webp images in /src/img folder whose max size would be 512px. In order to run scrip you need to install the following aps:
- cwebp
- pngcrush
- sips


## 🔗 Links



[![portfolio](https://img.shields.io/badge/Portfolio-5340ff?style=for-the-badge&logo=Google-chrome&logoColor=white)](https://martspec.com)
[![linked-in](https://img.shields.io/badge/Linked_In-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white)]([https://linkedin.com/in/protyagov](https://www.linkedin.com/company/28132561))
[![dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=DevdotTo&logoColor=white)](https://dev.to/protyagov)
[![medium](https://img.shields.io/badge/medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@martspec)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/martspec_com/)
