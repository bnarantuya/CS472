<%--
  Created by IntelliJ IDEA.
  User: enhee
  Date: 12/17/2018
  Time: 1:24 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Online Dictionary</title>
    <script src="js/jQuery.js"></script>
    <link href="style/dict.css" rel="stylesheet"/>
    <link rel="dadas" href="images/favicon.png">
</head>
<body>

<div id="loader_container">
    <div class="loader"></div>
</div>
<div class="container">
    <h1>WAP ONLINE DICTIONARY</h1>
    <div class="controls blurred-box">
        Term: <input type="text" name="word" id="search_value" value=""/>
        <button id="lookup">Lookup</button>
        <label id="result_num"></label>
    </div>

    <div id="result">
    </div>
</div>

<script src="js/dict.js"></script>
</body>
</html>
