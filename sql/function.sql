use db;
select * from tb;

select score from tb group by score order by score desc;
select * from tb where score = (
select score from tb group by score order by score desc limit 1,1);



select concat(usr_id, ' \"\" []    ', score) from tb;

