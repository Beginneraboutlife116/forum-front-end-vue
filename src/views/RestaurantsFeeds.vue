<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :newest-restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :newest-comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

const dummyData = {
  "restaurants": [
    {
        "id": 1,
        "name": "Amina Larkin",
        "tel": "006.348.4894 x471",
        "address": "38084 Bashirian Estate",
        "opening_hours": "08:00",
        "description": "veniam in minus",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.157825066855974",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 2,
        "name": "Enola Nicolas",
        "tel": "571.442.0605",
        "address": "6788 Mraz Summit",
        "opening_hours": "08:00",
        "description": "Labore et ex.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.351271905511126",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 3,
        "name": "Daren O'Conner",
        "tel": "1-745-483-8983 x938",
        "address": "6761 Clinton Branch",
        "opening_hours": "08:00",
        "description": "Aut et a. Dolorem facilis unde unde aspernatur. Occaecati ex et nemo sed. Dolor voluptatem consequatur recusandae voluptatem maiores. Repellat rerum est architecto fugit ad dolorem.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.9109644399176",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 4,
        "name": "Breanna Johnson",
        "tel": "779-190-3310 x192",
        "address": "0632 Torp Center",
        "opening_hours": "08:00",
        "description": "Sed ullam et quaerat.\nEos aut voluptates.\nOfficiis quaerat quidem aut corrupti fugit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.14020374967595",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 5,
        "name": "Lisa Rutherford",
        "tel": "091-298-5502",
        "address": "1606 Veum Key",
        "opening_hours": "08:00",
        "description": "Ut sunt autem. Dolorum consequuntur alias quis. Necessitatibus sit quia et ad. Enim aut earum voluptas pariatur quae vel velit. Rerum excepturi cum maxime esse sit commodi voluptatibus inventore. Perferendis et voluptatem exercitationem unde non aliquam quas.\n \rMolestiae accusantium eos itaque. Ipsa sit modi tempora et at quibusdam. Rerum rerum ullam quasi ut amet odit. Dolores nihil cum sapiente libero ut aliquid fuga odit dolor. Voluptatem amet harum et mollitia illo eum quaerat harum. Quia libero suscipit ut aut odio odit consequuntur velit laudantium.\n \rSed ipsum cupiditate. Suscipit molestias sed illum minus impedit. Ipsam molestiae architecto. Hic consectetur quae atque illum dolor neque sed.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.93331875619546",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 6,
        "name": "Lisandro Maggio",
        "tel": "(196) 443-2325",
        "address": "13600 Gideon Points",
        "opening_hours": "08:00",
        "description": "maiores ut dolores",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.27456644758315",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 7,
        "name": "Miss Joana Zieme",
        "tel": "870.235.8447 x638",
        "address": "781 Schaden Forge",
        "opening_hours": "08:00",
        "description": "Dolores velit eum eligendi quasi est ipsam voluptatem. Molestias eveniet totam est. Necessitatibus doloribus quasi nostrum voluptas blanditiis.\n \rRepellat id ut officiis. Asperiores pariatur voluptas earum ut nesciunt praesentium doloremque. Occaecati a id veniam impedit est.\n \rLabore odit natus magni et nostrum. Consequatur id odit ut. Earum accusamus quam et tenetur inventore voluptatem rerum consequatur id. Consequatur facere perferendis et. Assumenda aut vero suscipit qui sed optio eum dolore. Non molestiae et aspernatur ut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.48077346124223",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 8,
        "name": "Clare Balistreri V",
        "tel": "546-916-7960",
        "address": "97470 Ted Plains",
        "opening_hours": "08:00",
        "description": "Dolore recusandae laboriosam debitis est voluptas quia. Error dolorem inventore accusantium. Inventore illum ut qui autem est.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.85585385235774",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 9,
        "name": "Felicity Williamson",
        "tel": "496.577.4775",
        "address": "75714 Manuel Mission",
        "opening_hours": "08:00",
        "description": "alias",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.8952470633362",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    },
    {
        "id": 10,
        "name": "Meaghan Keeling",
        "tel": "425.171.8188",
        "address": "62317 Collins Union",
        "opening_hours": "08:00",
        "description": "Quo unde recusandae in occaecati et tempora velit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.3269609558979",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        }
    }
  ],
  "comments": [
    {
        "id": 1,
        "text": "Exercitationem officiis aliquid.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$s/g.WV6HuLIpeBVCPx/nm.76XI31zEBXdmOsqQFtM1s/ISJbzWW7m",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 1,
            "name": "Amina Larkin",
            "tel": "006.348.4894 x471",
            "address": "38084 Bashirian Estate",
            "opening_hours": "08:00",
            "description": "veniam in minus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.157825066855974",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 3
        }
    },
    {
        "id": 2,
        "text": "In provident fugiat voluptatibus qui inventore ut nemo.",
        "UserId": 3,
        "RestaurantId": 2,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 2,
            "name": "Enola Nicolas",
            "tel": "571.442.0605",
            "address": "6788 Mraz Summit",
            "opening_hours": "08:00",
            "description": "Labore et ex.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.351271905511126",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 2
        }
    },
    {
        "id": 3,
        "text": "Natus est aut inventore voluptatem excepturi.",
        "UserId": 1,
        "RestaurantId": 3,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 3,
            "name": "Daren O'Conner",
            "tel": "1-745-483-8983 x938",
            "address": "6761 Clinton Branch",
            "opening_hours": "08:00",
            "description": "Aut et a. Dolorem facilis unde unde aspernatur. Occaecati ex et nemo sed. Dolor voluptatem consequatur recusandae voluptatem maiores. Repellat rerum est architecto fugit ad dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.9109644399176",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 1
        }
    },
    {
        "id": 4,
        "text": "Alias eveniet beatae quia esse aut corrupti.",
        "UserId": 1,
        "RestaurantId": 4,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 4,
            "name": "Breanna Johnson",
            "tel": "779-190-3310 x192",
            "address": "0632 Torp Center",
            "opening_hours": "08:00",
            "description": "Sed ullam et quaerat.\nEos aut voluptates.\nOfficiis quaerat quidem aut corrupti fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.14020374967595",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 2
        }
    },
    {
        "id": 5,
        "text": "Neque sunt alias nihil omnis.",
        "UserId": 3,
        "RestaurantId": 5,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 5,
            "name": "Lisa Rutherford",
            "tel": "091-298-5502",
            "address": "1606 Veum Key",
            "opening_hours": "08:00",
            "description": "Ut sunt autem. Dolorum consequuntur alias quis. Necessitatibus sit quia et ad. Enim aut earum voluptas pariatur quae vel velit. Rerum excepturi cum maxime esse sit commodi voluptatibus inventore. Perferendis et voluptatem exercitationem unde non aliquam quas.\n \rMolestiae accusantium eos itaque. Ipsa sit modi tempora et at quibusdam. Rerum rerum ullam quasi ut amet odit. Dolores nihil cum sapiente libero ut aliquid fuga odit dolor. Voluptatem amet harum et mollitia illo eum quaerat harum. Quia libero suscipit ut aut odio odit consequuntur velit laudantium.\n \rSed ipsum cupiditate. Suscipit molestias sed illum minus impedit. Ipsam molestiae architecto. Hic consectetur quae atque illum dolor neque sed.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.93331875619546",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 1
        }
    },
    {
        "id": 6,
        "text": "Et similique rerum odit aliquid laboriosam quibusdam recusandae soluta.",
        "UserId": 3,
        "RestaurantId": 6,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 6,
            "name": "Lisandro Maggio",
            "tel": "(196) 443-2325",
            "address": "13600 Gideon Points",
            "opening_hours": "08:00",
            "description": "maiores ut dolores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.27456644758315",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 1
        }
    },
    {
        "id": 7,
        "text": "Dolores qui ratione et commodi repellat.",
        "UserId": 1,
        "RestaurantId": 7,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 7,
            "name": "Miss Joana Zieme",
            "tel": "870.235.8447 x638",
            "address": "781 Schaden Forge",
            "opening_hours": "08:00",
            "description": "Dolores velit eum eligendi quasi est ipsam voluptatem. Molestias eveniet totam est. Necessitatibus doloribus quasi nostrum voluptas blanditiis.\n \rRepellat id ut officiis. Asperiores pariatur voluptas earum ut nesciunt praesentium doloremque. Occaecati a id veniam impedit est.\n \rLabore odit natus magni et nostrum. Consequatur id odit ut. Earum accusamus quam et tenetur inventore voluptatem rerum consequatur id. Consequatur facere perferendis et. Assumenda aut vero suscipit qui sed optio eum dolore. Non molestiae et aspernatur ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.48077346124223",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 1
        }
    },
    {
        "id": 8,
        "text": "Debitis id omnis officiis aut et aut tempora minima optio.",
        "UserId": 1,
        "RestaurantId": 8,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 8,
            "name": "Clare Balistreri V",
            "tel": "546-916-7960",
            "address": "97470 Ted Plains",
            "opening_hours": "08:00",
            "description": "Dolore recusandae laboriosam debitis est voluptas quia. Error dolorem inventore accusantium. Inventore illum ut qui autem est.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.85585385235774",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 5
        }
    },
    {
        "id": 9,
        "text": "Sint sed fuga qui ullam.",
        "UserId": 3,
        "RestaurantId": 9,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 9,
            "name": "Felicity Williamson",
            "tel": "496.577.4775",
            "address": "75714 Manuel Mission",
            "opening_hours": "08:00",
            "description": "alias",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.8952470633362",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 3
        }
    },
    {
        "id": 10,
        "text": "Aliquid nihil esse.",
        "UserId": 3,
        "RestaurantId": 10,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "User": {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "Restaurant": {
            "id": 10,
            "name": "Meaghan Keeling",
            "tel": "425.171.8188",
            "address": "62317 Collins Union",
            "opening_hours": "08:00",
            "description": "Quo unde recusandae in occaecati et tempora velit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.3269609558979",
            "viewCounts": 0,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z",
            "CategoryId": 2
        }
    }
  ]
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
      // 很棒的方法！
    }
  }
}
</script>