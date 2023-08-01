import { Suspense } from 'react';
import { Spinner } from '../components/elements/Spinner';
import {
  HistoryContainer,
  HistoryContainerItem,
} from '../components/containers/HistoryContainer';

export default function Skillset() {
  const histories: HistoryContainerItem[] = [
    {
      startDate: '2022/10/01',
      endDate: '2023/05/31',
      title: 'データ管理基盤ソリューションおよびパッケージ製品の企画・開発',
      description:
        'モダンデータスタックなデータ分析基盤を自動構築する自社パッケージ製品の企画・開発',
      positions: ['エンジニア'],
      members: 2,
      skills: [
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'GCP',
        'Python',
        'Go',
      ],
    },
    {
      startDate: '2021/06/01',
      endDate: '2022/09/30',
      title: 'コンシューマー向け飲食店予約サービスの開発・保守',
      description:
        '既存コンポーネントの保守、バグ対応、機能改善、大型案件での開発作業、新規APIサーバーの開発、FEアプリケーション開発バッチアプリケーション開発',
      positions: ['エンジニア', 'チームリーダー'],
      members: 20,
      skills: [
        'Java',
        'SpringBoot',
        'Thymeleaf',
        'Maven',
        'Javascript',
        'Typescript',
        'HTML5',
        'CSS',
        'ShellScript',
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'Vuejs',
        'Nodejs',
        'Screwdriver',
        'SonarQube',
      ],
    },
    {
      startDate: '2020/10/01',
      endDate: '2021/05/31',
      title: 'DevOps最新動向に関する調査・検証と社内技術の推進',
      description:
        'DevOpsに関連する技術トレンドの調査, 検証、社内技術力推進企画の検討, 立案, 推進、同企画における社内ツールの開発（インフラ構築～アプリ開発）',
      positions: ['プロジェクトマネージャー'],
      members: 2,
      skills: [
        'Javascript',
        'Typescript',
        'HTML5',
        'CSS',
        'ShellScript',
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'Vuejs',
        'Nodejs',
        'ServerlessFramework',
        'Jenkins',
        'SonarQube',
      ],
    },
    {
      startDate: '2020/09/01',
      endDate: '2021/05/31',
      title: '共済団体様オンラインシステムの基盤更改プロジェクト',
      description:
        'プロジェクト計画の立案、見積もり書の作成/提案、プロジェクトの発足・遂行、各種プロジェクト管理（要員・進捗等）、顧客折衝',
      positions: ['プロジェクトマネージャー'],
      members: 10,
      skills: [
        'Linux',
        'GitLab',
        'Oracle',
        'ShellScript',
        'PowerShell',
        'Catalyst',
        'ESXi',
      ],
    },
    {
      startDate: '2018/07/01',
      endDate: '2020/08/31',
      title: '各種共済システムの運用保守・基盤更改',
      description:
        'プロジェクト計画の立案、見積もり書の作成/提案、プロジェクトの発足・遂行、各種プロジェクト管理（要員・進捗等）、顧客折衝',
      positions: ['プロジェクトマネージャー'],
      members: 20,
      skills: [
        'Linux',
        'AIX',
        'Oracle',
        'ShellScript',
        'PowerShell',
        'Catalyst',
        'ESXi',
      ],
    },
    {
      startDate: '2017/06/01',
      endDate: '2018/06/30',
      title: '生産管理パッケージの設計・開発',
      description:
        '.NETで作られた製造業向けの生産管理業務ソフトウェアパッケージのカスタマイズ開発',
      positions: ['エンジニア'],
      members: 10,
      skills: ['Windows', 'Oracle', 'DotNET', 'CSharp'],
    },
    {
      startDate: '2017/02/01',
      endDate: '2017/05/31',
      title: 'Oracle監視サービスの設計・開発',
      description:
        'OracleCloud上でPaaSとして提供するOracleDatabaseを監視するためのサービスの設計・構築',
      positions: ['チームリーダー'],
      members: 1,
      skills: ['Linux', 'PostgreSQL', 'Python', 'ShellScript', 'Zabbix'],
    },
    {
      startDate: '2016/10/01',
      endDate: '2017/01/31',
      title: '社内向けフェデレーションサービスの開発',
      description:
        'アクセス管理、フェデレーションサーバープラットフォームのOSSであるOpenAM, OpenIG, OpenDJをカスタマイズした、社内向けの認証基盤サービスの開発。',
      positions: ['エンジニア'],
      members: 8,
      skills: ['Java', 'OpenAM'],
    },
    {
      startDate: '2016/04/01',
      endDate: '2016/09/30',
      title: '企業向けパブリッククラウドサービスの開発',
      description:
        'OpenStackを使った大規模パブリッククラウドサービスの開発。主にKeyStoneコンポーネントをカスタマイズしたユーザー管理機能の開発を担当',
      positions: ['エンジニア'],
      members: 10,
      skills: ['OpenStack', 'Linux', 'Python', 'Java', 'MySQL'],
    },
    {
      startDate: '2013/09/01',
      endDate: '2016/03/31',
      title: 'DB統合システムの設計・開発',
      description:
        'Oracle Databaseをベースとした大規模組織向けのデータベースサービス基盤の上流設計から開発・テストまで',
      positions: ['エンジニア', 'チームリーダー'],
      members: 10,
      skills: ['Oracle', 'Linux', 'Solaris', 'ShellScript'],
    },
  ];

  return (
    <div className="flex flex-col p-10 max-w-screen-lg items-center">
      {histories.map((history, index) => (
        <Suspense fallback={<Spinner />} key={history.title}>
          <HistoryContainer item={history} index={index} />
        </Suspense>
      ))}
    </div>
  );
}
