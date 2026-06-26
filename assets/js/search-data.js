// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-from-colors-to-classes-emergence-of-concepts-in-vision-transformers-was-accepted-to-the-3rd-world-conference-on-explainable-artificial-intelligence-xai-2025",
          title: 'Our paper From Colors to Classes: Emergence of Concepts in Vision Transformers was...',
          description: "",
          section: "News",},{id: "news-our-paper-knowledge-graphs-for-empirical-concept-retrieval-originally-presented-at-the-2nd-world-conference-on-explainable-artificial-intelligence-xai-2024-was-accepted-for-presentation-at-the-1st-international-workshop-on-explainable-ai-and-knowledge-graphs-at-eswc-2025",
          title: 'Our paper Knowledge Graphs for Empirical Concept Retrieval (originally presented at The 2nd...',
          description: "",
          section: "News",},{id: "news-our-parallel-session-latent-space-navigation-interpretation-probing-and-steering-was-accepted-to-the-d3a-conference-see-you-on-august-26-27-2025",
          title: 'Our parallel session Latent space navigation - interpretation, probing and steering was accepted...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-give-a-flash-talk-at-ellis-unireps-speaker-series-on-20-june-2025-i-will-talk-about-our-paper-on-convex-decision-regions-in-deep-network-representations-update-the-recording-of-the-talk-is-available-see-also-the-journal-version-of-the-paper",
          title: 'I am delighted to give a flash talk at ELLIS UniReps Speaker Series...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-talk-at-the-workshop-on-self-supervised-learning-for-signal-decoding-on-august-14-15-in-aalborg-denmark-organized-by-the-pioneer-centre-for-artificial-intelligence-i-will-talk-about-our-paper-on-convex-decision-regions-in-deep-network-representations",
          title: 'I was invited to give a talk at the Workshop on Self-Supervised Learning...',
          description: "",
          section: "News",},{id: "news-after-years-of-work-it-s-finally-out-our-paper-on-convex-decision-regions-in-deep-network-representations-got-published-in-nature-communications-see-the-recording-of-the-talk-about-the-paper-i-gave-at-ellis-unireps-speaker-series-two-weeks-ago-we-also-have-a-python-package-for-evaluating-convexity",
          title: 'After years of work, it’s finally out: our paper On convex decision regions...',
          description: "",
          section: "News",},{id: "news-the-d3a-conference-was-eventful-our-workshop-latent-space-navigation-interpretation-probing-and-steering-was-a-big-success-slides-as-well-as-hands-on-jupyter-notebooks-are-available-on-github-moreover-our-poster-about-the-paper-from-colors-to-classes-emergence-of-concepts-in-vision-transformers-won-one-of-the-best-poster-awards",
          title: 'The D3A conference was eventful! Our workshop Latent space navigation - interpretation, probing...',
          description: "",
          section: "News",},{id: "news-new-preprint-large-vision-models-can-solve-mental-rotation-problems-we-systematically-evaluate-vit-clip-dinov2-and-dinov3-on-layer-wise-mental-rotation-tasks-and-find-that-self-supervised-vits-capture-geometry-better-than-supervised-ones-intermediate-layers-outperform-final-layers-and-difficulty-increases-with-rotation-occlusion-mirroring-human-reaction-time-patterns",
          title: 'New preprint: Large Vision Models Can Solve Mental Rotation Problems! We systematically evaluate...',
          description: "",
          section: "News",},{id: "news-our-paper-challenges-in-explaining-deep-learning-models-for-data-with-biological-variation-got-published-in-plos-one-the-paper-was-created-in-collaboration-with-foss-analytical-a-s-and-explores-applying-post-hoc-explainability-methods-on-biological-data-specifically-images-of-grains-presents-rarely-discussed-challenges-and-offers-a-framework-for-evaluation-of-the-methods",
          title: 'Our paper Challenges in explaining deep learning models for data with biological variation...',
          description: "",
          section: "News",},{id: "news-on-december-2nd-i-ll-be-at-the-ellis-unconference-presenting-at-the-poster-session-our-paper-on-convex-decision-regions-in-deep-network-representations-it-would-be-great-to-see-you-there-and-get-a-chance-to-talk-in-person-get-more-info-and-register-to-attend-at-https-eurips-cc-ellis",
          title: 'On December 2nd, I’ll be at the ELLIS UnConference presenting at the Poster...',
          description: "",
          section: "News",},{id: "news-our-latest-research-on-explainable-ai-and-its-real-world-impact-has-recently-been-highlighted-in-the-following-popular-science-features-inside-an-ai-mind-do-machines-think-like-we-do-sciencenews-dk-this-article-discusses-the-discovery-of-convexity-in-ai-models-a-geometric-pattern-that-mirrors-how-the-human-brain-organizes-concepts-ai-workflows-can-improve-image-based-quality-control-of-agricultural-crops-direc-digital-research-centre-denmark-this-article-explores-a-collaboration-with-foss-to-make-ai-more-reliable-and-explainable-when-inspecting-biological-materials-like-grain-ai-workflow-kan-forbedre-billedbaseret-kvalitetskontrol-af-afgrøder-linkedin-danish-version-of-the-agricultural-quality-control-story",
          title: 'Our latest research on explainable AI and its real-world impact has recently been...',
          description: "",
          section: "News",},{id: "news-i-am-co-organizing-the-𝟱𝘁𝗵-𝗫𝗔𝗜𝟰𝗖𝗩-𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽-at-cvpr-2026",
          title: 'I am co-organizing the 𝟱𝘁𝗵 𝗫𝗔𝗜𝟰𝗖𝗩 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽  at CVPR 2026.',
          description: "",
          section: "News",},{id: "news-our-paper-large-vision-models-can-solve-mental-rotation-problems-was-accepted-to-icassp-2026-take-a-look-at-our-more-approachable-medium-post-about-the-paper-it-is-also-selected-for-an-oral-presentation-at-the-mlsp-l19-multimodal-and-contrastive-representation-learning-session",
          title: 'Our paper Large Vision Models Can Solve Mental Rotation Problems was accepted to...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-foss-analytical-a-s-about-explainability-in-deep-learning-covering-our-paper-challenges-in-explaining-deep-learning-models-for-data-with-biological-variation-a-result-of-my-phd-collaboration-with-foss-and-our-work-on-convex-decision-regions-in-deep-network-representations-published-in-nature-communications",
          title: 'I gave a talk at FOSS Analytical A/S about explainability in deep learning...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-talk-at-the-9th-international-symposium-on-ai-verification-saiv-2026-co-located-with-the-federated-logic-conference-floc-in-lisbon-on-july-24-25-2026-my-talk-latent-space-navigation-interpretation-probing-and-steering-will-build-on-the-parallel-session-i-co-organised-at-the-d3a-conference-last-year-slides-and-hands-on-notebooks-are-available-on-github",
          title: 'I was invited to give a talk at the 9th International Symposium on...',
          description: "",
          section: "News",},{id: "news-i-am-honoured-to-have-been-awarded-a-ddsa-postdoctoral-fellowship-for-my-project-geometry-of-trust-a-unified-framework-for-convex-latent-steering-and-causal-concept-alignment-starting-september-2026-based-at-the-section-for-cognitive-systems-at-dtu-compute-the-project-asks-whether-ai-safety-can-come-from-inside-the-model-from-the-geometric-structure-of-how-it-represents-information-rather-than-only-from-filtering-inputs-and-outputs-building-on-our-nature-communications-paper",
          title: 'I am honoured to have been awarded a DDSA Postdoctoral Fellowship for my...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/lenkatetkova.bsky.social", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/345/1472.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%6E%68%79@%64%74%75.%64%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lenkatetkova", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lenka-tetkova", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0009-6896", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GSJaf6kAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
