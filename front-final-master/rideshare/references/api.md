# API

{% api-method method="get" host="http://csarideshare.com" path="/login" %}
{% api-method-summary %}
Login
{% endapi-method-summary %}

{% api-method-description %}
原名backend-get-user-id
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="code" type="string" required=true %}
**前端wx.login获得的code**
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
	"user_id": 202
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/view-rides" %}
{% api-method-summary %}
View Rides
{% endapi-method-summary %}

{% api-method-description %}
**按出发地/目的地筛选后的的ride**  
原名RideList
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="departure" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="destination" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "list": [
        {
            "ride_id": 1,
            "driver_id": 202,
            "departure": "Isla Vista",
            "destination": "Los Angeles",
            "date": "08/01/2019",
            "price": 10,
            "num_seat": 4,
            "num_approved": 1,
            "status": "OPEN",
            "note": "Very fast."
        },
        {
            "ride_id": 2,
            "driver_id": 202,
            "departure": "Isla Vista",
            "destination": "San Jose",
            "date": "08/03/2019",
            "price": 10,
            "num_seat": 4,
            "num_approved": 0,
            "status": "OPEN",
            "note": "Very slow."
        } 
    ]
} 
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/view-ride" %}
{% api-method-summary %}
View Ride
{% endapi-method-summary %}

{% api-method-description %}
Response里面是ride的全部信息，包括driver和全部相关的applications信息  
未开工
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="ride\_id" type="integer" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
 {
    "ride_id": 1,
    "driver_id": 202,
    "departure": "Isla Vista",
    "destination": "Los Angeles",
    "date": "08/01/2019",
    "price": 10,
    "num_seat": 4,
    "num_approved": 1,
    "status": "OPEN",
    "note": "Very fast.",
    
    "driver": {
        "user_id": 202,
        "name": "Petry",
        "contact": "666-666-6666",
        "avatar_url": ""
    },
    
    "applications": [
        {
            "application_Id": 10,
            "ride_id": 1,
            "passenger_id": 202,
            "driver_id": 202,
            "status": "ACCEPTED",
            "num_passenger": 1,
            "note": "old driver take take me"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://csarideshare.com" path="/create-ride" %}
{% api-method-summary %}
Create Ride
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="departure" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="destination" type="string" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="date" type="string" required=true %}
MM-DD-YYYY
{% endapi-method-parameter %}

{% api-method-parameter name="price" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="num\_seat" type="integer" required=false %}
可以带的人数
{% endapi-method-parameter %}

{% api-method-parameter name="note" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://csarideshare.com" path="/create-application" %}
{% api-method-summary %}
Create Application
{% endapi-method-summary %}

{% api-method-description %}
原名ride\_info\_back
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="ride\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="num\_passenger" type="integer" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="note" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/view-my-rides" %}
{% api-method-summary %}
View My Rides
{% endapi-method-summary %}

{% api-method-description %}
原名ride\_list . view\_ride  
包括该user作为driver和passenger的所有ride的信息
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "result": [
        {
            "ride_id": 1,
            "driver_id": 202,
            "departure": "Isla Vista",
            "destination": "Los Angeles",
            "date": "08/01/2019",
            "price": 10,
            "num_seat": 4,
            "num_approved": 1,
            "status": "OPEN",
            "note": "Very fast."
        },
        {
            "ride_id": 2,
            "driver_id": 202,
            "departure": "Isla Vista",
            "destination": "San Jose",
            "date": "08/03/2019",
            "price": 10,
            "num_seat": 4,
            "num_approved": 0,
            "status": "OPEN",
            "note": "Very slow."
        }         
    ]
} 
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/view-my-pending-applications" %}
{% api-method-summary %}
View My Pending Applications
{% endapi-method-summary %}

{% api-method-description %}
包含该用户发出的application，以及该用户创建的ride收到的application  
原名ride\_list . view\_pending
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="number" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
 {
    "result": [
        {
            "application_Id": 20,
            "ride_id": 2,
            "driver_id": 202,
            "passenger_id": 202,
            "status": "PENDING",
            "num_passenger": 100,
            "note": "take me home country road"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/accept-application" %}
{% api-method-summary %}
Accept Application
{% endapi-method-summary %}

{% api-method-description %}
原名ride\_list . accept\_ride
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="integer" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/deny-application" %}
{% api-method-summary %}
Deny Application
{% endapi-method-summary %}

{% api-method-description %}
 原名ride\_list . deny\_ride
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="integer" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://csarideshare.com" path="/view-user" %}
{% api-method-summary %}
View User
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "name": "Petry",
    "contact": "666-666-6666",
    "avatar_url": ""
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://csarideshare.com" path="/update-user" %}
{% api-method-summary %}
Update User
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="user\_id" type="integer" required=true %}

{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="contact" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="avatar\_url" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

