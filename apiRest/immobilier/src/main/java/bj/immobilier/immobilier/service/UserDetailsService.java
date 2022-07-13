package bj.immobilier.immobilier.service;

import bj.immobilier.immobilier.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsService extends org.springframework.security.core.userdetails.UserDetailsService {


    User createUser(User user);

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;


}
