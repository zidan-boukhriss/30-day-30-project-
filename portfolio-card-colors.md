# Portfolio Card --- Color Palette

> Palette extracted/approximated from the generated UI design.\
> The values are intended as a practical design-system starting point.

  -----------------------------------------------------------------------
  Color                   Hex                     Usage
  ----------------------- ----------------------- -----------------------
  **Page Background**     `#F5F6F7`               Main page/canvas
                                                  background

  **Card Background**     `#FFFFFF`               Portfolio card surface

  **Primary Text**        `#17202B`               Name, headings, primary
                                                  button text/icon areas

  **Secondary Text**      `#617084`               Role, bio, location,
                                                  social labels

  **Muted Text**          `#8A95A5`               Less important metadata
                                                  and supporting text

  **Border**              `#D9DEE5`               Card outline, dividers,
                                                  secondary button border

  **Skill Background**    `#EEF1F4`               Skill tags/chips

  **Skill Text**          `#465367`               Text inside skill tags

  **Primary Button**      `#202934`               "View Portfolio" button

  **Primary Button Text** `#FFFFFF`               Text and icon inside
                                                  primary button

  **Accent Green**        `#24965B`               Availability indicator
                                                  and status text

  **Status Background**   `#E8F5EE`               "Available for
                                                  projects" badge

  **Avatar Background**   `#C9D7E6`               Fallback/background
                                                  tone around avatar

  **Icon Dark**           `#17202B`               GitHub, X, arrows, and
                                                  dark UI icons
  -----------------------------------------------------------------------

## Recommended CSS Variables

``` css
:root {
  --color-page-bg: #F5F6F7;
  --color-card-bg: #FFFFFF;

  --color-text-primary: #17202B;
  --color-text-secondary: #617084;
  --color-text-muted: #8A95A5;

  --color-border: #D9DEE5;
  --color-skill-bg: #EEF1F4;
  --color-skill-text: #465367;

  --color-primary: #202934;
  --color-primary-text: #FFFFFF;

  --color-accent: #24965B;
  --color-status-bg: #E8F5EE;

  --color-avatar-bg: #C9D7E6;
  --color-icon-dark: #17202B;
}
```

## Color Roles

### 1. Neutral Foundation

-   `#F5F6F7` --- page background
-   `#FFFFFF` --- card background
-   `#D9DEE5` --- borders and dividers

### 2. Typography

-   `#17202B` --- strongest text hierarchy
-   `#617084` --- secondary information
-   `#8A95A5` --- muted/supporting information

### 3. Interactive Elements

-   `#202934` --- primary CTA
-   `#FFFFFF` --- text on the primary CTA
-   `#D9DEE5` --- secondary CTA border

### 4. Status / Accent

-   `#24965B` --- availability/status accent
-   `#E8F5EE` --- availability badge background

### 5. Skill Tags

-   `#EEF1F4` --- chip background
-   `#465367` --- chip text
