import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
cre
java
Descargar
Copiar código
public boolean login(String email, String password) {
    // Variables de conexión
    String url = "jdbc:mysql://localhost:3306/dbname";
    String user = "root";
    String pass = "password";

    // Establecer la conexión
    try {
        Class.forName("com.mysql.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, user, pass);

        // Consulta para buscar al usuario
        String sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        PreparedStatement pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, email);
        pstmt.setString(2, password);
        ResultSet rs = pstmt.executeQuery();

        // Verificar si el usuario existe
        if (rs.next()) {
            // Cerrar la conexión
            conn.close();
            return true;
        } else {
            // Cerrar la conexión
            conn.close();
            return false;
        }
    } catch (Exception e) {
        e.printStackTrace();
        return false;
    }
}