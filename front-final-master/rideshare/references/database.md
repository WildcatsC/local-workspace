# Database

## ride

| Column Name | Type | Description |
| :--- | :--- | :--- |
| ride\_id | INT, PK |  |
| driver\_id | INT, FK | （原名driverid） |
| departure | VARCHAR |  |
| destination | VARCHAR |  |
| date | DATE |  |
| price | VARCHAR |  |
| num\_seat | VARCHAR | （原名people） |
| num\_approved | VARCHAR | （原名approved\_people） |
| status | VARCHAR | OPEN/CLOSED  是否还接受application |
| note | VARCHAR |  |

## application

<table>
  <thead>
    <tr>
      <th style="text-align:left">Column Name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Access</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">application_id</td>
      <td style="text-align:left">
        <p>INT(11)</p>
        <p>PK, AI,
          <br />
        </p>
      </td>
      <td style="text-align:left">&#x7528;&#x6237;&#x4E0D;&#x53EF;&#x89C1;</td>
      <td style="text-align:left">
        <p>(&#x65B0;&#x589E;) &#x8FD9;&#x4E00;&#x4E2A;row&#x7684;&#x552F;&#x4E00;&#x6807;&#x8BC6;&#x3002;</p>
        <p>&#x5176;&#x5B9E;&#x4F5C;&#x7528;&#x548C;&#x539F;&#x6765;&#x7684;ride_id&#x76F8;&#x540C;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ride_id</td>
      <td style="text-align:left">INT(11)</td>
      <td style="text-align:left">&#x7528;&#x6237;&#x4E0D;&#x53EF;&#x89C1;</td>
      <td style="text-align:left">
        <p>&#x867D;&#x7136;&#x540D;&#x5B57;&#x76F8;&#x540C;&#x4F46;&#x8FD9;&#x4E2A;&#x7684;&#x4F5C;&#x7528;&#x4E0E;&#x539F;&#x6765;&#x7684;ride_id&#x4E0D;&#x540C;</p>
        <p>&#x662F;&#x8FD9;&#x6761;application&#x5BF9;&#x5E94;&#x7684;ride</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">passenger_id</td>
      <td style="text-align:left">INT</td>
      <td style="text-align:left">&#x7528;&#x6237;&#x4E0D;&#x53EF;&#x89C1;</td>
      <td style="text-align:left">&#x7533;&#x8BF7;&#x4EBA;</td>
    </tr>
    <tr>
      <td style="text-align:left">status</td>
      <td style="text-align:left">VARCHAR(45)</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">PENDING / ACCEPTED / REJECTED</td>
    </tr>
    <tr>
      <td style="text-align:left">num_passenger</td>
      <td style="text-align:left">INT</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&#x642D;&#x8F66;&#x7684;passenger&#x4EBA;&#x6570;</td>
    </tr>
    <tr>
      <td style="text-align:left"><del>pickUp</del>
      </td>
      <td style="text-align:left"><del>VARCHAR</del>
      </td>
      <td style="text-align:left">&lt;del&gt;&lt;/del&gt;</td>
      <td style="text-align:left"><del>(&#x5E9F;&#x5F03;)&#x5177;&#x4F53;&#x4E0A;&#x8F66;&#x5730;&#x70B9;</del>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><del>dropOff</del>
      </td>
      <td style="text-align:left"><del>VARCHAR</del>
      </td>
      <td style="text-align:left">&lt;del&gt;&lt;/del&gt;</td>
      <td style="text-align:left"><del>(&#x5E9F;&#x5F03;)&#x4F53;&#x4E0B;&#x8F66;&#x5730;&#x70B9;</del>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">note</td>
      <td style="text-align:left">VARCHAR</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">// &#x6BD4;&#x5982;&#x5177;&#x4F53;&#x4E0A;&#x8F66;&#x4E0B;&#x8F66;&#x4F4D;&#x7F6E;</td>
    </tr>
  </tbody>
</table>## user

| Column Name | Type | Access | Description |
| :--- | :--- | :--- | :--- |
| user\_id | INT, PK, AI | 用户不可见 |  |
| wechat\_openid |  | 用户不可见 |  |
| name | VARCHAR | 公开 | 用户昵称 |
| contact | VARCHAR | 公开 | 联系方式。用户自己决定用手机号/微信号/anything |
| avatar\_url |  | 公开 |  |



