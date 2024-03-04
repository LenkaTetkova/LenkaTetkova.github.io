---
title: "Robustness of Visual Explanations to Common Data Augmentation Methods"
collection: publications
permalink: /publication/2023-05-01-robustness
excerpt: 'Paper on robustness of explainability methods to common data augmentation methods.'
date: 2023-06-01
venue: 'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition'
paperurl: 'https://openaccess.thecvf.com/content/CVPR2023W/XAI4CV/papers/Tetkova_Robustness_of_Visual_Explanations_to_Common_Data_Augmentation_Methods_CVPRW_2023_paper.pdf'
citation: '**Tětková, L.**, & Hansen, L. K. (2023). Robustness of Visual Explanations to Common Data Augmentation Methods. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 3714-3719).'
---

As the use of deep neural networks continues to grow, understanding their behaviour has become more crucial than ever. Post-hoc explainability methods are a potential solution, but their reliability is being called into question. Our research investigates the response of post-hoc visual explanations to naturally occurring transformations, often referred to as augmentations. We anticipate explanations to be invariant under certain transformations, such as changes to the colour map while responding in an equivariant manner to transformations like translation, object scaling, and rotation. We have found remarkable differences in robustness depending on the type of transformation, with some explainability methods (such as LRP composites and Guided Backprop) being more stable than others. We also explore the role of training with data augmentation. We provide evidence that explanations are typically less robust to augmentation than classification performance, regardless of whether data augmentation is used in training or not.
