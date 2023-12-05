'use client'
import {createContext, useState} from 'react'

function populateGroup1() {
    return(
        {
            "calendar": {
              "events": [
                {
                  "date": '12/09/2023',
                  "time": "11:30 AM",
                  "title": "HCI Class",
                  "location": "That Wharton Building",
                  "description": "Funnest class ever please give me an A",
                  "attendees": [
                    "Mob", "IDK"
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
                  "caption": "this was soooooooo fun",
                  "postedBy": "Reigen"
                }
              ]
            },
            "user": {
              "myName": "Reigen",
              "myProfilePhotoURL": "https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg",
              "myBorderColor": "#c0aded",
              "myAppThemeBaseColor": "#db747f",
              "status": {
                "message": "Set your status . . .",
                "emoji": ""
              }
            },
            "members": {
              "Mob": {
                "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                "memberBorderColor": "#5d98d4",
                "memberStatus": {
                  "message": "bawling",
                  "emoji": "😍"
                }
              },
                "IDK": {
                    "memberProfilePhotoURL": "https://i.imgur.com/Bwqg0fu.png",
                    "memberBorderColor": "#a8783e",
                    "memberStatus": {
                        "message": "test",
                        "emoji": "😍"
                    }
                },
                "IDK2": {
                    "memberProfilePhotoURL": "https://i.imgur.com/pwQSdII.png",
                    "memberBorderColor": "#ad4eeb",
                    "memberStatus": {
                        "message": "test2",
                        "emoji": "😍"
                    }
                },
                "IDK3": {
                    "memberProfilePhotoURL": "https://acnhcdn.com/latest/NpcBromide/NpcNmlOcp01.png",
                    "memberBorderColor": "#ff9ccb",
                    "memberStatus": {
                        "message": "test3",
                        "emoji": "😍"
                    }
                },
                "IDK4": {
                    "memberProfilePhotoURL": "https://pbs.twimg.com/profile_images/1298543441589276672/J-7vMCTE_400x400.png",
                    "memberBorderColor": "#5d70e0",
                    "memberStatus": {
                        "message": "test4",
                        "emoji": "😍"
                    }
                },
                "IDK5": {
                    "memberProfilePhotoURL": "https://i.imgur.com/HTYMTkd.png",
                    "memberBorderColor": "#e05f5d",
                    "memberStatus": {
                        "message": "test5",
                        "emoji": "😍"
                    }
                },
                "IDK6": {
                    "memberProfilePhotoURL": "https://i.imgur.com/bfMRBp2.png",
                    "memberBorderColor": "#c5e05d",
                    "memberStatus": {
                        "message": "test6",
                        "emoji": "😍"
                    }
                },
            }
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
    const [groupData, setGroupData] = useState(populateGroup1())

    function changeGroup(num) {
        if (num === 1) {
            setGroupData(populateGroup1()) ;
        } else if (num === 2) {
            setGroupData(populateGroup2()) ;
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