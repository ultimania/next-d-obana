export default function Profile() {
  const itemList = [
    {
      id: 'PROFILE',
      rows: [
        '深谷匠',
        'Fullstack Engineer',
        '札幌生まれ、札幌育ち、実家は岩手、埼玉在住',
        'Twitter/Facebook',
      ],
    },
    {
      id: 'CONTACT',
      rows: ['yng.ultimania@gmail.com'],
    },
    {
      id: 'ADDRESS',
      rows: ['埼玉県川口市'],
    },
  ];

  return (
    <div className="w-full text-center bg-slate-200 py-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {itemList.map((item) => (
            <div key={item.id} className="flex flex-row mt-4">
              <div className="w-40 text-left">{item.id}</div>
              <div className="flex flex-col text-left">
                {item.rows.map((row) => (
                  <span key={row}>{row}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>image area dayo</div>
      </div>
    </div>
  );
}
