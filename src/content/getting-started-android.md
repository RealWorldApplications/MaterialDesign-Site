# Android - Getting Started

If you'd like to use Material Design Icons in your Android app, there are several ways to do so: Using SVGs and Using a Library.

## Using SVGs

Android (5.0 API Level 21+) uses the Vector Drawable format that is similar to SVG. That means you can download each one of our icons as SVG and import them in your Android project for later use as an `src` in an `<ImageView>`.

## Using a Library (third-party)

Instead of having to download an SVG for each icon you need, you can use the [Material Icon Library](https://github.com/code-mc/material-icon-lib), a constantly updated library containing all of our icons. It can be easily used as Drawable, a standalone View or inside menu resource files.

## Demo

![](http://i.imgur.com/KXHfXo8.gif)

### Usage

#### Step 1

**Gradle**

```groovy
dependencies {
    implementation 'net.steamcrafted:materialiconlib:1.1.5'
}
```

### Step 2

There's a total of 3 different use cases (click the links to jump to their section). You can use the provided [`MaterialIconView`](/getting-started/android#materialiconview) which mostly is just a more advanced `ImageView` or use your preferred `ImageView` and use the [`MaterialDrawable`](/getting-started/android#materialdrawable) as Drawable resource. If you want to spice up your `Toolbar` with icons from this library there is a custom [`MaterialMenuInflater`](/getting-started/android#materialmenuinflater) that does just that in a single line of code.

#### MaterialIconView

Add the view to your XML:

```xml
<net.steamcrafted.materialiconlib.MaterialIconView
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- VERY IMPORTANT -->

    android:layout_width="48dp"
    android:layout_height="48dp"
    app:materialIcon="clipboard_arrow_down" <!-- This sets the icon, HAS AUTOCOMPLETE ;) -->
    app:materialIconColor="#fff" <!-- Sets the icon color -->
    app:materialIconSize="24dp"  <!-- Sets the icon size -->
    android:scaleType="center" <!-- Centers the icon (all scale types supported) -->
    android:background="@android:color/darker_gray"
    android:id="@+id/icon"
/>
```

You can also use the other route: the "wrap_content" way:

```xml
<net.steamcrafted.materialiconlib.MaterialIconView
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- VERY IMPORTANT -->

    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:padding="12dp" <!-- now we use a padding to center the icon -->
    app:materialIcon="clipboard_arrow_down" <!-- This sets the icon, HAS AUTOCOMPLETE ;) -->
    app:materialIconColor="#fff" <!-- Sets the icon color -->
    app:materialIconSize="24dp"  <!-- Sets the icon size -->
    <!-- scaleType is no longer required for this method -->
    android:background="@android:color/darker_gray"
    android:id="@+id/icon"
/>
```

The view is inherited from `ImageView`. This means that you can use any and all features of the very flexible `ImageView` BUT be reminded that this view does not cache any of the drawables it creates, so every time you change something about the icon, it's going to regenerate the drawable. Using this view inside listviews is highly discouraged, if you want to use these icons in a `ListView`, cache the drawables and use the `MaterialDrawableBuilder` in combination with an `ImageView`!

As mentioned before this extends the android `ImageView` class, there's a few methods unique to this particular view:

```java
// Sets the icon, all 1000+ icons are available inside the MaterialDrawableBuilder.IconValue enum
yourMaterialIconView.setIcon(IconValue iconValue);

// Sets the size of the icon to the default action bar icon size
yourMaterialIconView.setToActionbarSize();

// Provide a dimension resource to use as icon size
yourMaterialIconView.setSizeResource(int dimenRes);

// Set the icon size using a value in dp units
yourMaterialIconView.setSizeDp(int size);

// Set the icon size using a pixel value
yourMaterialIconView.setSizePx(int size);

// Set the icon color
yourMaterialIconView.setColor(int color);

// Set the icon color using a color resource
yourMaterialIconView.setColorResource(int colorRes);

// Set the icon's alpha value (0-255) 0 for completely transparent
yourMaterialIconView.setAlpha(int alpha);

// Sets a custom colorfilter to the drawing paint (for the more advanced devs)
yourMaterialIconView.setColorFilter(ColorFilter cf);

// Clear the color filter set using above method
yourMaterialIconView.clearColorFilter();

// Sets a custom paint style (for the more advanced devs)
yourMaterialIconView.setStyle(Paint.Style style);


// You can use any of the ImageView methods as well:
yourMaterialIconView.setBackgroundColor(Color.WHITE)
yourMaterialIconView.setScaleType(ScaleType.CENTER)
// etc...
```

#### MaterialDrawable

That was easy, right? Next up the custom drawables, they are internally used by the `MaterialIconView` so you'll see that they share many of the same methods.

The initialisation happens using the `MaterialDrawableBuilder`, which you can use to set all the properties of the drawable:

```java
// The method returns a MaterialDrawable, but as it is private to the builder you'll have to store it as a regular Drawable ;)
Drawable yourDrawable = MaterialDrawableBuilder.with(context) // provide a context
        .setIcon(MaterialDrawableBuilder.IconValue.WEATHER_RAINY) // provide an icon
        .setColor(Color.WHITE) // set the icon color
        .setToActionbarSize() // set the icon size
    .build(); // Finally call build
```

This will throw an `IconNotSetException` if you forget to provide an icon.

Once you call build, your Drawable will be spit out and you are ready to use it everywhere you please! Setting it to a view is just as easy as with any other `Drawable` (e.g. for `ImageView`):

```java
yourImageView.setImageDrawable(yourDrawable);
```

And that's all there is to it. Below are all the methods you can use with the `MaterialDrawableBuilder` for reference.

```java
// Sets the icon, all 1000+ icons are available inside the MaterialDrawableBuilder.IconValue enum
builder.setIcon(IconValue iconValue);

// Builds the drawable, this method always comes last ofcourse
builder.build();

// Sets the size of the icon to the default action bar icon size
builder.setToActionbarSize();

// Provide a dimension resource to use as icon size
builder.setSizeResource(int dimenRes);

// Set the icon size using a value in dp units
builder.setSizeDp(int size);

// Set the icon size using a pixel value
builder.setSizePx(int size);

// Set the icon color
builder.setColor(int color);

// Set the icon color using a color resource
builder.setColorResource(int colorRes);

// Set the icon's alpha value (0-255) 0 for completely transparent
builder.setAlpha(int alpha);

// Sets a custom colorfilter to the drawing paint (for the more advanced devs)
builder.setColorFilter(ColorFilter cf);

// Clear the color filter set using above method
builder.clearColorFilter();

// Returns the alpha value
builder.getOpacity();

// Sets a custom paint style (for the more advanced devs)
builder.setStyle(Paint.Style style);
```

#### MaterialMenuInflater

With the `MaterialMenuInflater` you can use any of the icons available in this library *inside* your menu resource files. In XML you'd have to do the following:

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- important, you'll have to include this to use the custom xml attributes -->
    xmlns:tools="http://schemas.android.com/tools" >

    <!-- example of a menu item with an icon -->
    <item
        android:title="Disable Wifi"
        app:showAsAction="always"
        app:materialIcon="wifi_off" <!-- This sets the icon, HAS AUTOCOMPLETE ;) -->
        app:materialIconColor="#FE0000" <!-- Sets the icon color -->
    />

</menu>
```

To actually inflate this menu you'll now have to use the `MaterialMenuInflater` instead of the default one. For the AppCompatActivity do the following in your `onCreateOptionsMenu`:

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    MaterialMenuInflater
            .with(this) // Provide the activity context
            // Set the fall-back color for all the icons. Colors set inside the XML will always have higher priority
            .setDefaultColor(Color.BLUE)
            // Inflate the menu
            .inflate(R.menu.your_menu_resource, menu);
    return true;
}
```

Since the release of the Appcompat-v7 library you can also use the `Toolbar` view inside your XML layouts. Inflating a menu for a toolbar is a bit different from the usual way, but it is just as easy:

```java
// Get the toolbar from layout
Toolbar toolbar = (Toolbar) findViewById(R.id.your_toolbar);

MaterialMenuInflater
        .with(this) // Provide a context, activity context will do just fine
        // Set the fall-back color for all the icons. Colors set inside the XML will always have higher priority
        .setDefaultColor(Color.BLUE)
        // Inflate the menu
        .inflate(R.menu.your_menu_resource, toolbar.getMenu());
```

And that's all there is to it.
