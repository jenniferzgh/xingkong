<?php
header("Content-Type:text/plain;charset=utf-8");
if($_SERVER["REQUEST_METHOD"]=="POST"){
	create();

}
function create(){
			if(!isset($_GET['name'])||empty($_GET['name'])
			||!isset($_GET['sex'])||empty($_GET['sex'])
			||!isset($_GET['year'])||empty($_GET['year'])
			||!isset($_GET['grade'])||empty($_GET['grade'])
			||!isset($_GET['month'])||empty($_GET['month'])
			||!isset($_GET['day'])||empty($_GET['day'])
			||!isset($_GET['specialty'])||empty($_GET['specialty'])
			||!isset($_GET['phone'])||empty($_GET['phone'])
			||!isset($_GET['center'])||empty($_GET['center'])
			||!isset($_GET['allocate'])||empty($_GET['allocate'])
			||!isset($_GET['other'])||empty($_GET['other'])
			||!isset($_GET['hobby'])||empty($_GET['hobby']))
			{
				echo "参数错误，员工信息填写不全111";
				return;
			}
			echo  $_POST["name"]."的信息保存成功111";
}
?>