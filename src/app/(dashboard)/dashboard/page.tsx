import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';

const page = async() => {
    const user = await getUserSession();
    redirect(`/dashboard/${user?.role}`)
};

export default page;