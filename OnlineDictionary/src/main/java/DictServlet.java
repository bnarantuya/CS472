import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class DictServlet extends HttpServlet {
    DbConnection db;

    @Override
    public void init() {
        if (db == null)
            db = new DbConnection();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String word = request.getParameter("word");

        PrintWriter out = response.getWriter();
        out.print(db.runQuery(DbConnection.SELECT_WHERE(word)));
        out.flush();
    }
}
