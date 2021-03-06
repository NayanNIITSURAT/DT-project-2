package com.niit.DAO;

import java.util.List;

import com.niit.Model.User;




public interface UserDAO {
	public boolean addUser(User user);
	public boolean deleteUser(User user);
	public boolean updateUser(User user);
	public User getUser(String loginName);
	public List<User> listUser(String email);
	public boolean checkLogin(User user);
	public boolean updateOnlineStatus(String status, User user);
	


}
