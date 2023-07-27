import { Suspense } from 'react';
import { Spinner } from '../components/elements/Spinner';
import {
  HistoryContainer,
  HistoryContainerItem,
} from '../components/elements/HistoryContainer';

export default function Skillset() {
  const histories: HistoryContainerItem[] = [
    {
      startDate: '2016/10/01',
      endDate: '2017/01/01',
      title: '社内向けフェデレーションサービスの開発',
      description:
        'アクセス管理、フェデレーションサーバープラットフォームのOSSであるOpenAM, OpenIG, OpenDJをカスタマイズした、社内向けの認証基盤サービスの開発。',
      positions: ['エンジニア'],
      members: 8,
      skills: ['Java', 'OpenAM', 'OpenIG', 'OpenDJ', 'jetty'],
    },
    {
      startDate: '2016/04/01',
      endDate: '2016/09/01',
      title: '企業向けパブリッククラウドサービスの開発',
      description:
        'OpenStackを使った大規模パブリッククラウドサービスの開発。主にKeyStoneコンポーネントをカスタマイズしたユーザー管理機能の開発を担当',
      positions: ['エンジニア'],
      members: 10,
      skills: ['OpenStack', 'Linux', 'Python', 'Java', 'MySQL'],
    },
    {
      startDate: '2013/09/01',
      endDate: '2016/03/01',
      title: 'DB統合システムの設計・開発',
      description:
        'Oracle Databaseをベースとした大規模組織向けのデータベースサービス基盤の上流設計から開発・テストまで',
      positions: ['エンジニア', 'チームリーダー'],
      members: 10,
      skills: ['oracle', 'Linux', 'Solaris', 'ShellScript'],
    },
  ];

  return (
    <div className="flex flex-col p-10">
      {histories.map((history, index) => (
        <Suspense fallback={<Spinner />} key={history.title}>
          <HistoryContainer item={history} index={index} />
        </Suspense>
      ))}
    </div>
  );
}
