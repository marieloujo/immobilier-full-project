package bj.immobilier.immobilier.config;

import bj.immobilier.immobilier.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class OAuth2SecurityConfiguration extends WebSecurityConfigurerAdapter {



    @Autowired
    private UserDetailsService userDetailsService;


    @Autowired
    private PasswordEncoder oauthClientPasswordEncoder;


    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }



    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(oauthClientPasswordEncoder);
    }


    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/oauth/token");
        /*web.ignoring().antMatchers(HttpMethod.OPTIONS, "/api/article/**");
        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/api/ville/**");
        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/api/commune/**");*/
    }



}
