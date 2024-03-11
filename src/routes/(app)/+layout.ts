import UserData from '$lib/stores/user.js';
import type { LayoutLoad, LayoutData } from './$types';

export const load: LayoutLoad = async function (): Promise<LayoutData> {
  const user = await UserData.getData();
  return { user: user };
}
