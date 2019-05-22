import com.google.gson.JsonArray;

import java.sql.*;

import com.google.gson.JsonObject;

public class DbConnection {
    private String name = "admin";
    private String password = "admin";
    private String database = "jdbc:mysql://localhost:3306/entries?useSSL=false";
    Connection connection;

    public void connect() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(database, name, password);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public boolean isConnected() {
        try {
            return connection.isClosed();
        } catch (SQLException e) {
            return false;
        }
    }

    public void disconnect() {
        if (isConnected()) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public JsonArray runQuery(String query) {
        connect();
        try {
            PreparedStatement statement = connection.prepareStatement(query);
            return convertToJSON(statement.executeQuery());
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            disconnect();
        }

        return null;
    }

    private JsonArray convertToJSON(ResultSet resultSet) throws SQLException {
        JsonArray json = new JsonArray();
        ResultSetMetaData metaData = resultSet.getMetaData();
        int total_columns = metaData.getColumnCount();

        while (resultSet.next()) {
            JsonObject jsonObject = new JsonObject();
            for (int i = 0; i < total_columns; i++) {
                jsonObject.addProperty(resultSet.getMetaData().getColumnLabel(i + 1).toLowerCase(), resultSet.getObject(i + 1).toString());
            }
            json.add(jsonObject);
        }
        return json;
    }

    public static String SELECT_ALL = "SELECT * FROM `entries`";

    public static String SELECT_WHERE(String value) {
        return "SELECT * FROM `entries` WHERE `word`='" + value + "'";
    }
}
