import { Logo } from './components/elements/Logo';

export default function Navigation({ className }: { className: string }) {
  return (
    <div className={`${className} flex flex-col text-left`}>
      <Logo />
    </div>
  );
}
