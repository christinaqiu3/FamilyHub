'use client'
import {createContext, useState} from 'react'

function populateGroup1() {
    return(
        {
            "calendar": {
              "events": [
                {
                  "date": 12092023,
                  "time": [
                    1130,
                    1330
                  ],
                  "title": "HCI Class",
                  "location": "That Wharton Building",
                  "description": "Funnest class ever please give me an A",
                  "attendees": [
                    "Mob"
                  ],
                  "color": "#5d98d4"
                }
              ]
            },
            "checkin": {
              "polls": [
                {
                  "title": "What should I eat for dinner?",
                  "options": {
                    "Pasta w/ Vodka Sauce": 3,
                    "Rice w/ Canned Salmon": 1
                  },
                  "owner": "Mob", 
                  "memberProfilePhotoURL": "https://64.media.tumblr.com/d822e00f096b9e858e3db11a98c689e7/7f7f189de7b16d26-c6/s400x600/7b600d2c2b869810c89133272551041d615de9bc.png",
                  "memberBorderColor": "#5d98d4"
                },
                {
                    "title": "Will Hanazawa get an A?",
                    "options": {
                        "Yes": 2,
                        "Yes.": 1
                    },
                    "owner": "Reigen",
                    "memberProfilePhotoURL": "https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg",
                    "memberBorderColor": "#c0aded"
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
                "message": "suffering",
                "emoji": "😎"
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
              }
            }
          }
    )
}

export const GroupContext = createContext(1) ;
export const GroupSetterContext = createContext(undefined) ;
export const GroupData = createContext() ;
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
                <GroupSetterData.Provider value = {{changeGroup}}>
                    <GroupData.Provider value = {{groupData}}>
                        {children}
                    </GroupData.Provider>
                </GroupSetterData.Provider>
            </GroupContext.Provider>
        </GroupSetterContext.Provider>
    )
}