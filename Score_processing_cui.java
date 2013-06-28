import java.util.Scanner;

public class Score_processing_cui {
	public static void main(String args[]) throws Exception {
		Scanner input = new Scanner(System.in);
		System.out.println("안녕하세요 미림여자정보과학고등학교 3학년 인터랙티브미디어과 이미애입니다.");
		System.out.println("★성적처리프로그램★");

		while(true){
			
			System.out.print("학교를 입력해주세요 : ");
			String schoolname = input.next();
			System.out.print("학년을 입력해주세요.(숫자만 입력) : ");
			int grade = input.nextInt();
			System.out.print("이름을 입력해주세요. : ");
			String name = input.next();

			System.out.println("안녕하세요. " + schoolname +" " + grade + "학년 " + name + "학생 반갑습니다.");

			System.out.print("점수를 입력하실 과목수를 입력해주세요. : ");
			int subjectnum =input.nextInt();

			String subject;
			String subjectsave[] = new String[subjectnum];
			double subjectgrade;
			double subgradesave[] = new double[subjectnum];
			double total = 0;
			double avg = 0;

			for(int i = 1; i<=subjectnum; i++){
				System.out.print("과목을 입력해주세요 : ");
				subject = input.next();
				subjectsave[i-1] = subject;
				//System.out.println(subjectsave[i-1]);

				System.out.print(subject + "의 점수를 입력해주세요. : ");
				subjectgrade = input.nextDouble();
				if(subjectgrade>100){
					System.out.println("과목점수는 100점 이상 적으실 수 없습니다. 다시적어주세요.");
					System.out.print(subject + "의 점수를 입력해주세요. : ");
					subjectgrade = input.nextDouble();
				}
				else{
					subgradesave[i-1] = subjectgrade;
					//System.out.println(subgradesave[i-1]);
				}
				total +=subgradesave[i-1]; 
			}
			System.out.println(name + "학생의 총 점수는 " + total + "점 입니다." );
			avg = total/subjectnum;
			String avg2 = String.format("%.2f", avg);
			System.out.println(name + "학생의 평균은 " + avg2 +"입니다.");
		}
	}
}