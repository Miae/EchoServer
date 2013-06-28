package EchoClient;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
//
public class EchoClient {
    public static void main(String[] args) throws IOException {
      System.out.println("보낼 메시지 : ");
      BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
      String msg = in.readLine();
      
      DatagramPacket dp = new DatagramPacket(msg.getBytes(), msg.getBytes().length,
    		  InetAddress.getByAddress("127.0.0.1", null),3000);
      
      DatagramSocket ds = new DatagramSocket();
      
      ds.send(dp);
    }
}