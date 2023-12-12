'use client'
import {createContext, useState} from 'react'

function populateGroup1() {
    return(
        {
            "groupName": "Mob's Family",
            "groups": ["Mob's Family", "Body Improvement Club!"],
            "calendar": {
                "events": [
                    {
                        "date": '12/05/2003',
                        "time": "11:30 AM",
                        "title": "Visit to Peppercorn",
                        "location": "Peppercorn HS",
                        "description": "Exorcism time",
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
                        "title": "What should I eat for dinner?",
                        "options": {
                            "Pasta w/ Vodka Sauce": 1,
                            "Rice w/ Canned Salmon": 1
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
                        "title": "Will Hanazawa get an A?",
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
                        "userVote": "Yes."
                    }
                ]
            },
            "memories": {
                "posts": [
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text3"]
                    },
                    {
                        "photoURL": "https://staticg.sportskeeda.com/editor/2021/07/4f13c-16259953891126-800.jpg",
                        "caption": "Had a great time on the island!",
                        "postedBy": "Bob",
                        "memberIcon": "https://i.imgur.com/pwQSdII.png",
                        "memberBorderColor": "#ad4eeb",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text4"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text4"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text4"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text3"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text3"]
                    },
                    {
                        "photoURL": "https://preview.redd.it/es7pw6g5jm771.jpg?width=450&format=pjpg&auto=webp&s=db9158b48c02cad8f11aea1f0311f5b93eed4cb3",
                        "caption": "this was soooooooo fun",
                        "postedBy": "Reigen",
                        "memberIcon": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                        "memberBorderColor": "#c0aded",
                        "title": "Help me",
                        "timeStamp": "2/5/2023 7:12:25 PM",
                        "tags": ["text", "text2", "text3"]
                    },
                ]
            },
            "user": {
                "myName": "Hanazawa",
                "myProfilePhotoURL": "https://i.pinimg.com/736x/16/62/e4/1662e41dd13fb2d31d66e05893359ec3.jpg",
                "myBorderColor": "#c0aded",
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
                    "userName": "Mob",
                    "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                    "memberBorderColor": "#5d98d4",
                    "memberStatus": {
                        "message": "bawling",
                        "emoji": "😍"
                    }
                },
                {
                    "userName": "IDK",
                    "memberProfilePhotoURL": "https://i.imgur.com/Bwqg0fu.png",
                    "memberBorderColor": "#a8783e",
                    "memberStatus": {
                        "message": "Ahhh!",
                        "emoji": "😍"
                    }},
                {"userName": "IDK2",
                    "memberProfilePhotoURL": "https://i.imgur.com/pwQSdII.png",
                    "memberBorderColor": "#ad4eeb",
                    "memberStatus": {
                        "message": "XD",
                        "emoji": "😍"
                    }},

                {"userName": "IDK3",
                    "memberProfilePhotoURL": "https://acnhcdn.com/latest/NpcBromide/NpcNmlOcp01.png",
                    "memberBorderColor": "#ff9ccb",
                    "memberStatus": {
                        "message": ":3",
                        "emoji": "😍"
                    }},

                {"userName": "IDK4",
                    "memberProfilePhotoURL": "https://pbs.twimg.com/profile_images/1298543441589276672/J-7vMCTE_400x400.png",
                    "memberBorderColor": "#5d70e0",
                    "memberStatus": {
                        "message": "Hello",
                        "emoji": "😍"

                    }},
                {"userName": "IDK5",
                    "memberProfilePhotoURL": "https://i.imgur.com/HTYMTkd.png",
                    "memberBorderColor": "#e05f5d",
                    "memberStatus": {
                        "message": "Hiii",
                        "emoji": "😍"
                    }},
                {"userName": "IDK6",
                    "memberProfilePhotoURL": "https://i.imgur.com/bfMRBp2.png",
                    "memberBorderColor": "#c5e05d",
                    "memberStatus": {
                        "message": ":3c",
                        "emoji": "😍"
                    }
                }
            ]
        }
    )
}

    function populateGroup2() {
        return(
            {
                "groupName": "Body Improvement Club!",
                "groups": ["Mob's Family", "Body Improvement Club!"],
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
                            "caption": "this was soooooooo fun",
                            "postedBy": "Reigen",
                            "memberBorderColor": "#c0aded"
                        }
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