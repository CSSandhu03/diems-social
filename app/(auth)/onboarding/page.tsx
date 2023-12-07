import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from '@clerk/nextjs';

async function Page() {
    const user = await currentUser();

    const userInfo: { _id?: string, username?: string, name?: string, bio?: string, image?: string} = {};

    interface UserData {
        id: string;
        objectId: string; // Change type to string
        username: string;
        name: string;
        bio: string;
        image: string | undefined;
    }
    
    // Inside the Page function
    const userData: UserData = {
        id: user?.id || "",
        objectId: userInfo?._id || "", // Ensure it's not null or undefined
        username: userInfo?.username || user?.username || "",
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete Your Profile Now to use Diems Social</p>

            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile 
                    user={userData} 
                    btnTitle="Continue"
                />
            </section>
        </main>
    )
}

export default Page;
