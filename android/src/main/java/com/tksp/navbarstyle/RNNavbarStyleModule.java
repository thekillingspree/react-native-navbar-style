package com.tksp.navbarstyle;

import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

public class RNNavbarStyleModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNNavbarStyleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNNavbarStyle";
    }

    @ReactMethod
    public void setNavbarColor(String color, Promise promise) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getCurrentActivity().getWindow().setNavigationBarColor(Color.parseColor(color));
            promise.resolve(true);
        } else {
            promise.reject(new Exception("Current android version(" + Build.VERSION.SDK_INT + ") does not support changing the navbar color."));
        }
    }

    @ReactMethod
    public void setLightNavbar(final boolean isLight, final Promise promise) {
        try {
            UiThreadUtil.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (Build.VERSION.SDK_INT >= 26) {
                        Window window = getCurrentActivity().getWindow();

                        int mUIFlags = window.getDecorView().getSystemUiVisibility();

                        if (isLight) {
                            mUIFlags |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
                        } else {
                            mUIFlags &= ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
                        }

                        window.getDecorView().setSystemUiVisibility(mUIFlags);
                        promise.resolve(true);
                    } else {
                        promise.reject(new Error("Current android version(" + Build.VERSION.SDK_INT + ") does not support changing the navbar theme."));
                    }
                }
            });
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}