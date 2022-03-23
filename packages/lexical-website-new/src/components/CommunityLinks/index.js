/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';

import ImageSwitcher from '../ImageSwitcher';
import styles from './styles.module.css';

const links = [
  {
    description: (
      <Translate
        id="pages.community.links.github.description"
        description="Description of Github community"
      >
        Some copy about stack overflow Some copy about stack overflowSome copy
        about stack overflow
      </Translate>
    ),
    image: (
      <ImageSwitcher
        light={require('../../../static/img/github-mark-light.svg').default}
        dark={require('../../../static/img/github-mark-dark.svg').default}
      />
    ),
    title: (
      <Translate
        id="pages.community.links.github.title"
        description="Hyperlink to Github"
      >
        GitHub
      </Translate>
    ),
    url: 'https://github.com/facebook/lexical',
  },
  {
    description: (
      <Translate
        id="pages.community.links.stackoverflow.description"
        description="Description of StackOverflow community"
      >
        Some copy about stack overflow Some copy about stack overflowSome copy
        about stack overflow
      </Translate>
    ),
    image: (
      <ImageSwitcher
        light={require('../../../static/img/stack-overflow.svg').default}
        dark={require('../../../static/img/stack-overflow.svg').default}
      />
    ),
    title: (
      <Translate
        id="pages.community.links.stackoverflow.title"
        description="Hyperlink to Stack Overflow"
      >
        Stack Overflow
      </Translate>
    ),
    url: 'https://stackoverflow.com/questions/tagged/lexicaljs',
  },
  {
    description: (
      <Translate
        id="pages.community.links.discord.description"
        description="Description of Discord community"
      >
        Some copy about stack overflow Some copy about stack overflowSome copy
        about stack overflow
      </Translate>
    ),
    image: (
      <ImageSwitcher
        light={require('../../../static/img/discord-logo-color.svg').default}
        dark={require('../../../static/img/discord-logo-color.svg').default}
      />
    ),
    title: (
      <Translate
        id="pages.community.links.discord.title"
        description="Hyperlink to Discord"
      >
        Discord
      </Translate>
    ),
    url: 'https://discord.com/channels/953974421008293909/953974421486436393',
  },
];

function CommunityLink({title, url, description, image}) {
  return (
    <div className="container">
      <div className="row">
        <div className={`col col--4 ${styles.image}`}>{image}</div>
        <div className="col col--8">
          <Link to={url}>
            <h2>{title}</h2>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CommunityLinks() {
  return (
    <div className="container">
      {links.map((link, index) => (
        <div key={index} className={`row margin-vert--md`}>
          <CommunityLink {...link} />
        </div>
      ))}
    </div>
  );
}