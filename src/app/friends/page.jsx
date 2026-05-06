import FriendCard from '@/components/FriendCard';

async function getData() {
  const res = await fetch("http://localhost:3000/data/friends.json");
  return res.json();
}

const FriendsPage = async () => {

  
     const friends  = await getData();

    return (
        
          <div className="bg-gray-100 rounded-lg m-12 text-center border border-gray-100">

                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-start">Your Friends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend}
                            />)
                        }
                    </div>
                </div>
    );
};

export default FriendsPage;
