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
      id: 'typescript',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg',
      lank: 3,
      description:
        'ジェネリクスやインターフェースなどの機能を理解し、適切に型安全な実装をすることができます。',
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
      id: 'VSCode',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/vscode/vscode-original.svg',
      lank: 4,
      description: '',
    },
    {
      id: 'Backlog',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'Github',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg',
      lank: 5,
      description: '',
    },
    {
      id: 'Maven',
      iconUrl: '',
      lank: 4,
      description: '',
    },
    {
      id: 'JUnit',
      iconUrl: '',
      lank: 5,
      description: '',
    },
    {
      id: 'jMeter',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'Selenium',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/selenium/selenium-original.svg',
      lank: 3,
      description: '',
    },
    {
      id: 'Terraform/Terragrunt',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/terraform/terraform-original.svg',
      lank: 5,
      description:
        '低コストかつスピーディなデータ分析基盤ソリューションのコア開発者としての利用・開発実績があり、クラウドだけでなくk8sや各種ミドルウェアのセットアップ自動化まで実装することができます。プロバイダのコントリビュート経験もあります。',
    },
    {
      id: 'Jenkins',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/jenkins/jenkins-original.svg',
      lank: 4,
      description: '',
    },
    {
      id: 'Screwdriver',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'CloudFoundry',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'Confluence',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/confluence/confluence-original.svg',
      lank: 3,
      description: '',
    },
    {
      id: 'Dynatrace',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'Splunk',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'SourceClear',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'SonarQube',
      iconUrl: '',
      lank: 3,
      description: '',
    },
    {
      id: 'Vim',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/vim/vim-original.svg',
      lank: 4,
      description:
        'VSCodeと組み合わせて愛用しているエディタです。基本的なキー操作は体が覚えているレベルですが、応用的なものは調べたり思い出したりしながら使ってます。',
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
