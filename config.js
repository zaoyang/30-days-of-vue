const dedent = require('dedent');
module.exports = {
  title: `30 Days of Vue`,
  topic: 'Vue',
  permalink: '/30-days-of-vue',
  subtitle: `A free introduction to Vue in 30 bite-size morsels`,
  gitRepoHttpUrl:
    'https://gitlab.com/fullstackio/thirty-days-of-vue/blob/master',
  heroLogoUrl: './images/vue-logo.png',
  heroPhotoUrl: './images/cover-image-sebastian-unrau-47679-unsplash.jpg',
  paperBookPhotoUrl: './images/30-days-of-vue-hardcover.jpg',
  paperBookPhotoUrlPng: './images/30-days-of-vue-hardcover.png',
  publicLessonCount: 7,
  previewPercent: 60,
  brandAccentColor1: '#40b882',
  lessonPrefix: 'day-',
  summary: dedent`
    Interested in learning Vue but having trouble getting started?

    We'll teach you how it all works - _for free_

    Over the next 30 days, we'll walk through everything you need to know to work with Vue. From the **very beginning** through topics like the **Vue Instance**, **Components**, and even **Testing**.
  `,
  whatIsThis: dedent`
  This post is part of the series [**30 Days of Vue**](/30-days-of-vue).

  In this series, we're starting from the very basics and walk through everything you need to know to get started with Vue. If you've ever wanted to learn Vue, this is the place to start!
    `,
  pdfLength: '310+',
  faq: [
    {
      q: 'What is this?',
      a:
        'This course is a series of articles which teach you how to use Vue from the ground up. The series provides a step-by-step process you can use to learn Vue from an empty folder to a Webpack-bundled Vue app.',
    },
    {
      q: 'What if I get stuck?',
      a:
        "Just [send us an email](us@fullstack.io) and we'll be happy to help you get unstuck",
    },
    {
      q: 'Who wrote this?',
      a:
        "We're the authors of the [Fullstack Vue Book](https://fullstack.io/vue)",
    },
  ],
  faqImageUrl: 'todo.jpg',
  faqCta: 'Enroll in this free course',

  afterword: dedent`
  The entire source code for this tutorial series can be found in [the GitHub repo](https://gitlab.com/fullstackio/thirty-days-of-vue/), which includes all the styles and code samples.

  If at any point you feel stuck, have further questions, feel free to reach out to us by:

  * Commenting on this post at the end of the article
  * Tweet at us at [@fullstackio](https://twitter.com/fullstackio)
`,
  authorSlugs: ['djirdehh'],
  closingCtaH1: 'Get started now',
  closingCtaCopy: `Join us on our 30-day journey in Vue. Join thousands of other professional Vue developers and learn one of the most powerful web application development frameworks available today.`,
  closingCtaButton: 'Download 30 Days of Vue PDF (FREE)',
  publishedOn: '2019-01-01',
  lessonLanguage: 'Day',
  ctaFormAction:
    'https://fd338.infusionsoft.com/app/form/process/a6e7d4fdf2891b50a87effa8540f834d',
  ctaFormXid: 'a6e7d4fdf2891b50a87effa8540f834d',
  ctaFormName: '30 Days of Vue Form Submitted',
  ctaInfVersion: '1.59.0.51',
  modalCtaHeader: 'Learn Vue (from the very beginning) in 30 days',
  modalCtaBody: dedent`
  Enter your name and email address below, then click the **"Send my free PDF"** button to get started
  `,
  modalCtaButton: 'SEND MY FREE PDF',
};
