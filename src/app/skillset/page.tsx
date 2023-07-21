import {
  ContentContainer,
  ContentContainerItem,
} from '../components/elements/ContentContainer';

export default function Skillset() {
  const languageAndFramework: ContentContainerItem[] = [
    {
      id: 'java',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg',
    },
    {
      id: 'SpringBoot',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/spring/spring-original-wordmark.svg',
    },
    {
      id: 'javascript',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
      id: 'Node.js',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
      id: 'Vue.js',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
    },
    {
      id: 'css',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    },
    {
      id: 'html',
      iconUrl:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    },
    {
      id: 'React',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg',
    },
    {
      id: 'Next.js',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original-wordmark.svg',
    },
    {
      id: 'Python',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/python/python-original-wordmark.svg',
    },
    {
      id: 'Django',
      iconUrl:
        'https://github.com/devicons/devicon/raw/master/icons/django/django-plain-wordmark.svg',
    },
  ];
  return (
    <div className="flex flex-col p-10">
      <ContentContainer
        title="Language & Framework"
        items={languageAndFramework}
      />
      <ContentContainer title="Development Tool" items={languageAndFramework} />
      <ContentContainer title="Infrastructure" items={languageAndFramework} />
      <ContentContainer title="Other" items={languageAndFramework} />
    </div>
  );
}
