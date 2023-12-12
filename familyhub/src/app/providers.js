'use client'
import {createContext, useState} from 'react'

function populateGroup1() {
    return(
        {
            "groupName": "The Cat Family",
            "groups": ["The Cat Family", "Body Improvement Club!"],
            "calendar": {
                "events": [
                    {
                        "date": '12/15/2023',
                        "time": "4:30 PM",
                        "title": "Coming home from college",
                        "location": "Airport",
                        "description": "I need to be picked up at the airport!",
                        "attendees": [
                            "Bob", "Ankha"
                        ],
                        "owner": "Rosie",
                        "memberProfilePhotoURL": "https://i.imgur.com/uSn7K4z.png",
                        "memberBorderColor": "#de148b"
                    },
                    {
                        "date": '12/20/2023',
                        "time": "11:30 AM",
                        "title": "Lolly's recital",
                        "location": "Catnip Middle School",
                        "description": "I have my dance recital today.",
                        "attendees": [
                            "Bob", "Ankha", "Punchy", "Rosie"
                        ],
                        "owner": "Lolly",
                        "memberProfilePhotoURL": "https://i.imgur.com/CiXUjrQ.jpg",
                        "memberBorderColor": "#57769b"
                    },
                    {
                        "date": '12/22/2023',
                        "time": "10:00 AM",
                        "title": "Hanging out with friends",
                        "location": "Raymond's house",
                        "description": "I'm going to be away all day to hang out with some friends.",
                        "attendees": [
                            "Punchy"
                        ],
                        "owner": "Punchy",
                        "memberProfilePhotoURL": "https://i.imgur.com/3SvGsNw.png",
                        "memberBorderColor": "#ffe700"
                    }
                ]
            },
            "checkin": {
                "polls": [
                    {
                        "title": "What should I eat for dinner?",
                        "options": {
                            "Pasta w/ Vodka Sauce": 1,
                            "Rice w/ Canned Salmon": 1
                        },
                        "userData": {
                            "owner": "Rosie",
                            "memberProfilePhotoURL": "https://i.imgur.com/uSn7K4z.png",
                            "memberBorderColor": "#de148b"
                        },
                        "voters": ["Punchy", "Rosie"],
                        "userVote": ""
                    },
                    {
                        "title": "Will Lolly get an A?",
                        "options": {
                            "Yes": 0,
                            "No": 1
                        },
                        "userData": {
                            "owner": "Punchy",
                            "memberProfilePhotoURL": "https://i.imgur.com/3SvGsNw.png",
                            "memberBorderColor": "#ffe700"
                        },
                        "voters": ["Lolly"],
                        "userVote": "Yes"
                    }
                ]
            },
            "memories": {
                "posts": [
                    {
                        "photoURL": "https://i.redd.it/pbn1o6gwh6n51.jpg",
                        "caption": "amazing sandwich :3",
                        "postedBy": "Lolly",
                        "memberIcon": "https://i.imgur.com/CiXUjrQ.jpg",
                        "memberBorderColor": "#57769b",
                        "title": "Sammich",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["food", "yum", "sandwich"]
                    },
                    {
                        "photoURL": "https://staticg.sportskeeda.com/editor/2021/07/4f13c-16259953891126-800.jpg",
                        "caption": "Had a great time on the island!",
                        "postedBy": "Bob",
                        "memberIcon": "https://i.imgur.com/pwQSdII.png",
                        "memberBorderColor": "#ad4eeb",
                        "title": "Island adventure",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["island", "summer"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/97hce5a0q7r21.png?auto=webp&s=13697533b626bff4c1acf63b3f0abaa4cafe1e12",
                        "caption": "Went on a picnic today!",
                        "postedBy": "Punchy",
                        "memberIcon": "https://i.imgur.com/3SvGsNw.png",
                        "memberBorderColor": "#ffe700",
                        "title": "Picnic",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["picnic", "food", "tasty"]
                    },
                    {
                        "photoURL": "https://nfccardstore.com/cdn/shop/products/IMG_0557_1200x1200.jpg",
                        "caption": "Planted some flowers today...",
                        "postedBy": "Rosie",
                        "memberIcon": "https://i.imgur.com/uSn7K4z.png",
                        "memberBorderColor": "#de148b",
                        "title": "Flowers!",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["flowers", "art", "gardening"]
                    },
                    {
                        "photoURL": "https://staticg.sportskeeda.com/editor/2022/02/c67d7-16442370637141-1920.jpg?w=840",
                        "caption": "Got some new furniture for my room.",
                        "postedBy": "Ankha",
                        "memberIcon": "https://i.imgur.com/xP8qsRX.png",
                        "memberBorderColor": "#2e3c90",
                        "title": "New room",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["furniture", "interiordecor"]
                    },
                    {
                        "photoURL": "https://i.redd.it/kw4d857bzl181.jpg",
                        "caption": "had a great day at the beach today!",
                        "postedBy": "Lolly",
                        "memberIcon": "https://i.imgur.com/CiXUjrQ.jpg",
                        "memberBorderColor": "#57769b",
                        "title": "Beach trip",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["beach", "vacation", "summer"]
                    },
                    
                ]
            },
            "user": {
                "myName": "Bob",
                "myProfilePhotoURL": "https://i.imgur.com/pwQSdII.png",
                "myBorderColor": "#ad4eeb",
                "myAppThemeLightColor": '#fef3c7',
                "myAppThemeMedColor": "#fee68a",
                "myAppThemeDarkColor":'#f59e0c',
                "status": {
                    "message": "Set your status . . .",
                    "emoji": ""
                }
            },

            "members": [
                {
                    "userName": "Ankha",
                    "memberProfilePhotoURL": "https://i.imgur.com/xP8qsRX.png",
                    "memberBorderColor": "#2e3c90",
                    "memberStatus": {
                        "message": "Ahhh!",
                        "emoji": "😭"
                    }},
                {"userName": "Punchy",
                    "memberProfilePhotoURL": "https://i.imgur.com/3SvGsNw.png",
                    "memberBorderColor": "#ffe700",
                    "memberStatus": {
                        "message": "XD",
                        "emoji": "😆"
                    }},

                {"userName": "Lolly",
                    "memberProfilePhotoURL": "https://i.imgur.com/CiXUjrQ.jpg",
                    "memberBorderColor": "#57769b",
                    "memberStatus": {
                        "message": ":3",
                        "emoji": "🥴"
                    }},

                {"userName": "Rosie",
                    "memberProfilePhotoURL": "https://i.imgur.com/uSn7K4z.png",
                    "memberBorderColor": "#de148b",
                    "memberStatus": {
                        "message": "Hello",
                        "emoji": "😍"

                    }},

            ]
        }
    )
}

    function populateGroup2() {
        return(
            {
                "groupName": "Body Improvement Club!",
                "groups": ["The Cat Family", "Body Improvement Club!"],
                "calendar": {
                    "events": [
                        {
                            "date": '12/05/2023',
                            "time": "11:30 AM",
                            "title": "Special Fri Practice!",
                            "location": "Club Room",
                            "description": "Extra Leg Day",
                            "attendees": [
                                "Mob"
                            ],
                            "owner": "Mob",
                            "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                            "memberBorderColor": "#5d98d4"
                        }
                    ]
                },
                "checkin": {
                    "polls": [
                        {
                            "title": "Should I skip practice on Wednesday?",
                            "options": {
                                "Yes": 1,
                                "No": 1
                            },
                            "userData": {
                                "owner": "Mob",
                                "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                                "memberBorderColor": "#5d98d4"
                            },
                            "voters": ["Mob", "Hanazawa"],
                            "userVote": ""
                        },
                        {
                            "title": "Can Yuzu bench 225?",
                            "options": {
                                "Yes": 0,
                                "Yes.": 1
                            },
                            "userData": {
                                "owner": "Reigen",
                                "memberProfilePhotoURL": "https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg",
                                "memberBorderColor": "#c0aded"
                            },
                            "voters": ["Reigen"],
                            "userVote": ""
                        }
                    ]
                },
                "memories": {
                    "posts": [
                        {
                            "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                            "caption": "I LOVE working out",
                            "postedBy": "Bob",
                            "memberIcon": "https://i.imgur.com/pwQSdII.png",
                            "memberBorderColor": "#ad4eeb",
                            "title": "Yay",
                            "timeStamp": "2/5/2023 7:12:25 PM",
                            "tags": ["animal-crossing", "2023"]
                        },
                        {
                            "photoURL": "https://staticg.sportskeeda.com/editor/2021/07/4f13c-16259953891126-800.jpg",
                            "caption": "Getting these gains B)",
                            "postedBy": "Reigen",
                            "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                            "memberBorderColor": "#c0aded",
                            "title": "Whee",
                            "timeStamp": "2/5/2023 7:12:25 PM",
                            "tags": ["mob-psycho", "2023"]

                        },
                    ]
                },
                "user": {
                    "myName": "Reigen",
                    "myProfilePhotoURL": "https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg",
                    "myBorderColor": "#c0aded",
                    "myAppThemeLightColor": '#99f7d7',
                    "myAppThemeMedColor": '#63dab2',
                    "myAppThemeDarkColor":'#0fcf8e',
                    "status": {
                        "message": "Set your status . . .",
                        "emoji": ""
                    }
                },
                "members": [
                    {
                        "userName": "Mob",
                        "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                        "memberBorderColor": "#5d98d4",
                        "memberStatus": {
                            "message": "bawling",
                            "emoji": "😍"
                        }
                    },
                    {
                        "userName": "Idk",
                        "memberProfilePhotoURL": "https://i.imgur.com/Bwqg0fu.png",
                        "memberBorderColor": "#a8783e",
                        "memberStatus": {
                            "message": "test",
                            "emoji": "😍"
                        }},
                    {"userName": "IDK2",
                        "memberProfilePhotoURL": "https://i.imgur.com/pwQSdII.png",
                        "memberBorderColor": "#ad4eeb",
                        "memberStatus": {
                            "message": "test2",
                            "emoji": "😍"
                        }},

                    {"userName": "IDK3",
                        "memberProfilePhotoURL": "https://acnhcdn.com/latest/NpcBromide/NpcNmlOcp01.png",
                        "memberBorderColor": "#ff9ccb",
                        "memberStatus": {
                            "message": "test3",
                            "emoji": "😍"
                        }},

                    {"userName": "IDK4",
                        "memberProfilePhotoURL": "https://pbs.twimg.com/profile_images/1298543441589276672/J-7vMCTE_400x400.png",
                        "memberBorderColor": "#5d70e0",
                        "memberStatus": {
                            "message": "test4",
                            "emoji": "😍"

                        }},
                    {"userName": "IDK5",
                        "memberProfilePhotoURL": "https://i.imgur.com/HTYMTkd.png",
                        "memberBorderColor": "#e05f5d",
                        "memberStatus": {
                            "message": "test5",
                            "emoji": "😍"
                        }},
                    {"userName": "IDK6",
                        "memberProfilePhotoURL": "https://i.imgur.com/bfMRBp2.png",
                        "memberBorderColor": "#c5e05d",
                        "memberStatus": {
                            "message": "test6",
                            "emoji": "😍"
                        }
                    }
                ]
            }
        )
    }

    export const GroupContext = createContext(1) ;
    export const GroupSetterContext = createContext(undefined) ;
    export const GroupData = createContext() ;
    export const GroupSwitcher = createContext() ;
    export const GroupSetterData = createContext() ;

    export function GroupProvider({children}) {
        const [group, setGroup] = useState(1)
        const [group1Saved, setGroup1Saved] = useState(populateGroup1())
        const [group2Saved, setGroup2Saved] = useState(populateGroup2())
        const [groupData, setGroupData] = useState(populateGroup1())

        function changeGroup(name) {
            if (name === "Mob's Family") {
                setGroup2Saved(groupData)
                setGroupData(group1Saved) ;
            } else if (name === "Body Improvement Club!") {
                setGroup1Saved(groupData)
                setGroupData(group2Saved) ;
            }
        }


        return (
            <GroupSetterContext.Provider value = {{setGroup}}>
                <GroupContext.Provider value = {{group}}>
                    <GroupSwitcher.Provider value = {{changeGroup}}>
                        <GroupSetterData.Provider value = {{setGroupData}}>
                            <GroupData.Provider value = {{groupData}}>
                                {children}
                            </GroupData.Provider>
                        </GroupSetterData.Provider>
                    </GroupSwitcher.Provider>
                </GroupContext.Provider>
            </GroupSetterContext.Provider>
        )
    }