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
        'サーバーコンポーネント/クライアントコンポーネントやSSG/SSRの仕組み・特徴を理解しており、一般的なWebアプリケーションを作成することができます。このポートフォリオサイトもNext.jsを使って作成しています。',
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
      description:
        '普段から愛用しているエディタで、基本的な機能は使いこなせます。また効率的にコーディングするためのショートカットキーやDockerやESLintといった開発ツール用プラグインと合わせた開発作業を行っています。',
    },
    {
      id: 'Github',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg',
      lank: 5,
      description:
        'Gitの基本的な操作に加え、IssueやPullRequest、Actionsなどのプロバイダとしての基本機能の他に、組織として安全に運用していくための設定・管理作業の実績もあります。',
    },
    {
      id: 'Maven',
      iconUrl:
        'https://github.com/devicons/devicon/raw/develop/icons/maven/maven-original.svg',
      lank: 4,
      description:
        'パッケージ管理やバージョン管理だけでなく、各種プラグインの設定やテスト周りの設定方法などSpringBootを使った開発に最適な設定・運用が可能です。',
    },
    {
      id: 'JUnit',
      iconUrl:
        'https://github.com/devicons/devicon/raw/develop/icons/junit/junit-original.svg',
      lank: 5,
      description:
        'JUnit5から追加されたパラメータテスト、WireMock・DBUnitなどを使用したプレゼンテーション層からインフラストラクチャ層までの一気通貫の結合テストなど、プロダクションコードの品質を保つために必要なテストコードの実装が可能です。',
    },
    {
      id: 'jMeter',
      iconUrl: 'https://jmeter.apache.org/images/jmeter_square.svg',
      lank: 3,
      description:
        '単なる負荷テストだけでなく、リリース後の実際の運用状況を想定して適切なスレッド数やリクエスト間隔に基づいたテストシナリオの作成および性能値の測定とその結果に対する考察などに取り組んできた実績があります。',
    },
    {
      id: 'Selenium',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/selenium/selenium-original.svg',
      lank: 2,
      description:
        'あまり複雑なテストケースは作成できませんが、画面遷移やログイン処理など、簡単な画面動作のテストケースであれば問題なく作成・実行できます。',
    },
    {
      id: 'Terraform/Terragrunt',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/terraform/terraform-original.svg',
      lank: 4,
      description:
        '低コストかつスピーディなデータ分析基盤ソリューションのコア開発者としての利用・開発実績があり、クラウドだけでなくk8sや各種ミドルウェアのセットアップ自動化まで実装することができます。プロバイダのコントリビュート経験もあります。',
    },
    {
      id: 'Jenkins',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/jenkins/jenkins-original.svg',
      lank: 4,
      description:
        'ツールの導入・基本設定作業から、パイプラインの実装・Gitプロバイダやその他開発ツールとの連携設定まで、ゼロからCICDを本番運用可能にする状態までを自走することができます。',
    },
    {
      id: 'CloudFoundry',
      iconUrl: 'https://www.svgrepo.com/show/373507/cloudfoundry.svg',
      lank: 2,
      description:
        'CICDと組み合わせて本番環境にアプリケーションをデプロイするためのマニフェストの作成が可能です。',
    },
    {
      id: 'Confluence',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/confluence/confluence-original.svg',
      lank: 2,
      description:
        '情報共有のために必要な基本的な記事の作成や、共有に便利な各種機能を扱うことができます。',
    },
    {
      id: 'Dynatrace',
      iconUrl: 'https://www.svgrepo.com/show/353681/dynatrace-icon.svg',
      lank: 3,
      description:
        '各環境にデプロイしたアプリケーションのメトリクスの収集設定、収集したメトリクスの情報に基づいたWebアプリケーションの性能解析が可能です。',
    },
    {
      id: 'Splunk',
      iconUrl:
        'https://github.com/devicons/devicon/raw/develop/icons/splunk/splunk-original-wordmark.svg',
      lank: 3,
      description:
        '各環境にデプロイしたアプリケーションのログの収集設定、収集したログ情報から適切なデータを得るためのSplunkクエリの作成、性能統計やエラー統計などメトリクス可視化のためのダッシュボードの作成などが可能です。',
    },
    {
      id: 'SonarQube',
      iconUrl: 'https://cdn.worldvectorlogo.com/logos/sonarqube-1.svg',
      lank: 3,
      description:
        'CICDツールと組み合わせたプロダクションコードの自動解析・解析結果の自動投稿・PullRequest連携設定などが可能です。',
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
