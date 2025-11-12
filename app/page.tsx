import { redirect } from 'next/navigation';
import { APP_CONFIG } from '../utils/constants';

export default function RootPage() {
  redirect(`/${APP_CONFIG.defaultLanguage}`);
}