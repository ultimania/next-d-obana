import {
  ContentContainer,
  ContentContainerItem,
} from '../components/elements/ContentContainer';

export default function Skillset() {
  const languageAndFramework: ContentContainerItem[] = [
    {
      id: 'ShellScript',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/bash/bash-original.svg',
      lank: 5,
      description:
        '複雑なコードをスクラッチから書くことができます。簡単な業務効率化ツールやユーティリティなどプロジェクトの課題や状況を判断して、適切なプログラムを作成することができます。',
    },
    {
      id: 'java',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg',
      lank: 5,
      description:
        '複雑なコードをスクラッチから書くことができます。JVM含めた仮想マシン層の基本原理を理解しており、トラブルシューティングへの対応も可能です。',
    },
    {
      id: 'SpringBoot',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/spring/spring-original-wordmark.svg',
      lank: 4,
      description:
        'webfluxなど応用的な実装が可能です。DIコンテナの仕組みや基本原理を理解しており既存のコードに対してより良くリファクタリングすることも可能です',
    },
    {
      id: 'javascript',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      lank: 3,
      description:
        'あまり複雑なコードをスクラッチで書くことはできませんが、ライブラリの実装や基本的なコードは問題なく書けます。',
    },
    {
      id: 'Node.js',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      lank: 3,
      description:
        'expressなどのライブラリを使ったAPIサーバーやその他基本的なサーバーサイドの実装ができます。',
    },
    {
      id: 'Vue.js',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
      lank: 2,
      description:
        'コンポーネントの基本原理を理解しており、vuexやvue-roterなどのライブラリを利用したWebアプリケーションを作成することができます。',
    },
    {
      id: 'css',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      lank: 2,
      description:
        '各プロパティの基本的な機能や特性を理解しており、デザイン通りの実装を行うことができます。',
    },
    {
      id: 'html',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      lank: 3,
      description:
        '各種タグの基本的な機能や特性を理解しており、デザイン通りの実装を行うことができます。',
    },
    {
      id: 'React',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg',
      lank: 3,
      description:
        'コンポーネントやフックの基本原理を理解しており、reduxやzustand、react-routerなどのライブラリを利用したWebアプリケーションを作成することができます。',
    },
    {
      id: 'Next.js',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original-wordmark.svg',
      lank: 2,
      description:
        'サーバーコンポーネント/クライアントコンポーネントやSSG/SSRの仕組み・特徴を理解しており、一般的なWebアプリケーションを作成することができます。このポートフォリオサイトもNext.jsを使って作成しております。',
    },
    {
      id: 'Python',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/python/python-original-wordmark.svg',
      lank: 3,
      description:
        'あまり複雑なコードをスクラッチで書くことはできませんが、モジュールの実装や基本的なコードは問題なく書けます。',
    },
    {
      id: 'Django',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/django/django-plain-wordmark.svg',
      lank: 2,
      description:
        'フレームワークの基本的な機能や特徴を理解しており、APIサーバー用のライブラリを使用した基本的な実装ができます。',
    },
  ];
  const developementTool: ContentContainerItem[] = [
    {
      id: 'ShellScript',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/bash/bash-original.svg',
      lank: 3,
      description:
        'あまり複雑なコードをスクラッチで書くことはできませんが、ライブラリの実装や基本的なコードは問題なく書けます。',
    },
  ];
  const infrastructure: ContentContainerItem[] = [
    {
      id: 'ShellScript',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/bash/bash-original.svg',
      lank: 3,
      description:
        'あまり複雑なコードをスクラッチで書くことはできませんが、ライブラリの実装や基本的なコードは問題なく書けます。',
    },
  ];
  const other: ContentContainerItem[] = [
    {
      id: 'ShellScript',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/bash/bash-original.svg',
      lank: 3,
      description:
        'あまり複雑なコードをスクラッチで書くことはできませんが、ライブラリの実装や基本的なコードは問題なく書けます。',
    },
  ];
  return (
    <div className="flex flex-col p-10">
      <ContentContainer
        title="Language & Framework"
        items={languageAndFramework}
      />
      <ContentContainer title="Development Tool" items={developementTool} />
      <ContentContainer title="Infrastructure" items={infrastructure} />
      <ContentContainer title="Other" items={other} />
    </div>
  );
}
