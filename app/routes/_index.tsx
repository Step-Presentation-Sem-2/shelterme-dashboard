import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'ShelterMe Dashboard' },
    { name: 'description', content: 'Welcome to ShelterMe Dashboard!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to shelterme dashboard</h1>
    </div>
  );
}
