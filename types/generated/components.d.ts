import type { Schema, Struct } from '@strapi/strapi';

export interface HomePageBestCare extends Struct.ComponentSchema {
  collectionName: 'components_home_page_best_cares';
  info: {
    displayName: 'best care';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faqItem: Schema.Attribute.Component<'home-page.faq-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface HomePageHero extends Struct.ComponentSchema {
  collectionName: 'components_home_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_service_items';
  info: {
    description: '';
    displayName: 'serviceItem';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageServices extends Struct.ComponentSchema {
  collectionName: 'components_home_page_services';
  info: {
    description: '';
    displayName: 'services';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    item: Schema.Attribute.Component<'home-page.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageTeam extends Struct.ComponentSchema {
  collectionName: 'components_home_page_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    item: Schema.Attribute.Component<'home-page.team-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageTeamItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_team_items';
  info: {
    displayName: 'teamItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageTestimonails extends Struct.ComponentSchema {
  collectionName: 'components_home_page_testimonails';
  info: {
    displayName: 'testimonails';
  };
  attributes: {
    testimony: Schema.Attribute.Component<'home-page.testimony', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageTestimony extends Struct.ComponentSchema {
  collectionName: 'components_home_page_testimonies';
  info: {
    displayName: 'testimony';
  };
  attributes: {
    description: Schema.Attribute.Text;
    fullname: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomePageVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_video_sections';
  info: {
    displayName: 'videoSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    contact: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedContactUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_uses';
  info: {
    displayName: 'contact us';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.contact', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'social media';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home-page.best-care': HomePageBestCare;
      'home-page.faq': HomePageFaq;
      'home-page.faq-item': HomePageFaqItem;
      'home-page.hero': HomePageHero;
      'home-page.service-item': HomePageServiceItem;
      'home-page.services': HomePageServices;
      'home-page.team': HomePageTeam;
      'home-page.team-item': HomePageTeamItem;
      'home-page.testimonails': HomePageTestimonails;
      'home-page.testimony': HomePageTestimony;
      'home-page.video-section': HomePageVideoSection;
      'shared.button': SharedButton;
      'shared.contact': SharedContact;
      'shared.contact-us': SharedContactUs;
      'shared.link': SharedLink;
      'shared.social-media': SharedSocialMedia;
    }
  }
}
