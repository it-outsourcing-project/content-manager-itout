import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    ogTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
  };
}

export interface BlocksBlock3 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_3s';
  info: {
    displayName: 'Block_3';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    blocks: Schema.Attribute.Component<'components.blocks', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u043A\u0446\u0438\u0438'>;
  };
}

export interface BlocksBlock2 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_2s';
  info: {
    displayName: 'Block_2';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_send_request_btn: Schema.Attribute.Boolean;
    services: Schema.Attribute.Component<'components.card', true>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u043A\u0446\u0438\u0438'>;
  };
}

export interface BlocksBlock1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_1s';
  info: {
    displayName: 'Block_1';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_send_request_btn: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    is_image_right: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'name'>;
    is_description_small: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsStringList extends Struct.ComponentSchema {
  collectionName: 'components_components_string_lists';
  info: {
    displayName: 'StringList';
  };
  attributes: {
    keyword: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430'>;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438'>;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438'>;
    price: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0426\u0435\u043D\u0430'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsBlocks extends Struct.ComponentSchema {
  collectionName: 'components_components_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'+71231231212'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'blocks.block-3': BlocksBlock3;
      'blocks.block-2': BlocksBlock2;
      'blocks.block-1': BlocksBlock1;
      'components.string-list': ComponentsStringList;
      'components.link': ComponentsLink;
      'components.card': ComponentsCard;
      'components.blocks': ComponentsBlocks;
    }
  }
}
